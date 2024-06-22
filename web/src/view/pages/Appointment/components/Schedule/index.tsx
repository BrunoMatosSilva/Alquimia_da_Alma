import { Swiper, SwiperSlide } from 'swiper/react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { SliderNavigation } from './components/SliderNavigation';
import { FilterIcon } from 'lucide-react';
import { SliderOption } from './components/SliderOption';
import 'swiper/css/virtual';
import { useScheduleController } from './useScheduleController';
import { FiltersModal } from './components/FiltersModal';
import { Spinner } from '@/components/Spinner';
import { useEffect, useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import EmptyPatient from "../../../../../assets/empty-state.svg"
import { EditAppointment } from '../../modals/EditAppointment';

export function Schedule() {
  const {
    appointments,  
    filters,
    isLoading,
    isInitialLoading,
    handleChangeFilter,
    isFilterModalOpen,
    handleCloseFilterModal,
    handleOpenFilterModal,
    handleApplyFilters,
    handleOpenEditModal,
    appointmentBeingEdit,
    isOpenEditModal,
    handleCloseEditModal
  } = useScheduleController()

  const month = String(filters.month).padStart(2, '0');
  const swiperRef = useRef<SwiperCore | null>(null);

  const hasSchedules = appointments.length > 0;

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(filters.day - 1, 0);
    }
  }, [filters.day]);

  const daysOfMonth = eachDayOfInterval({
    start: startOfMonth(new Date(filters.year, filters.month - 1, filters.day -1,)),
    end: endOfMonth(new Date(filters.year, filters.month - 1, filters.day -1)),
  });

  return (
    <div className="rounded-2xl w-full md:h-[750px] px-4 py-8 md:p-10 flex flex-col">

      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
        <Spinner className="text-primary-foreground fill-primary/50 h-10 w-10"/>
        </div>
      )}

      {!isInitialLoading && (
      <>
        <FiltersModal
      open={isFilterModalOpen}
      onClose={handleCloseFilterModal}
      onApplyFilters={handleApplyFilters}
      />

      {appointmentBeingEdit && (
        <EditAppointment 
        open={isOpenEditModal}
        onClose={handleCloseEditModal}
        appointment={appointmentBeingEdit}
        />
      )}
      <header>
        <div className="flex w-full justify-between items-center font-semibold">
          <h1 className='text-2xl text-card'>{format(month, 'MMMM', {locale: ptBR}).toUpperCase()} - {filters.year}</h1>
          <button 
          className='text-secondary'
          onClick={handleOpenFilterModal}
          >
            <FilterIcon />
          </button>
        </div>

        <div className="flex items-center justify-center mt-6 relative w-full overflow-hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides
            initialSlide={filters.day -1}
            onSwiper={swiper => (swiperRef.current = swiper)}
            onSlideChange={swiper => handleChangeFilter('day')(daysOfMonth[swiper.realIndex].getDate())}
          >
            <SliderNavigation />
            {daysOfMonth.map((day, index) => (
              <SwiperSlide key={index}>
                {({isActive}) => (
                  <SliderOption
                  day={format(day, 'dd', { locale: ptBR })}
                  isActive={isActive}
                  index={index}
                />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-6 flex flex-col gap-4">
        {appointments.map((appointment) => (
          <div 
          key={appointment.id}
          onClick={() => handleOpenEditModal(appointment)}
          className="bg-card/20 p-3 rounded-md flex justify-between items-center px-4 font-light cursor-pointer hover:bg-card/40 transition-all"
          >
            <div className='flex flex-col gap-3'>
            <p>{appointment.patient.name}</p>
            <p className='text-secondary'><b>Psic:</b> {appointment.psychologist.name}</p>
            </div>
            <p className='text-destructive font-semibold'>{appointment.time}</p>
          </div>
        ))}
      </div>

      {(!hasSchedules && !isLoading) && (
        <div className="flex flex-col items-center md:mt-32 h-full gap-4 m-2">
          <img src={EmptyPatient} alt="Empty state" className="w-32 h-32" />
          <p>Não encontramos nenhum agendamento!</p>
        </div>
      )}
        </>
      )}

      </div>
  );
}