import React, { useState } from 'react';
import { capitalizeFirstLetter } from '@/app/utils/capitalizeFristLetter';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

interface DatePickerProps {
  value: Date;
  onChange?(date: Date): void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [year, setYear] = useState(value.getFullYear());
  const [month, setMonth] = useState(value.getMonth());

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(event.target.value));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(Number(event.target.value));
  };

  const handleDateChange = (date: Date | undefined) => {
    onChange?.(date ?? new Date());
  };

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(0, i);
    return capitalizeFirstLetter(format(date, 'LLLL', { locale: ptBR }));
  });

  const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear()+1 - i);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <select value={year} onChange={handleYearChange} className="form-select bg-transparent text-primary">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select value={month} onChange={handleMonthChange} className="form-select bg-transparent text-primary">
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <DayPicker
        locale={ptBR}
        selected={value}
        mode="single"
        onSelect={handleDateChange}
        month={new Date(year, month)}
        classNames={{
          caption: 'hidden',
          nav: 'flex gap-1',
          nav_button_previous: 'text-teal-500 flex items-center justify-center !bg-transparent',
          nav_button_next: 'text-teal-500 flex items-center justify-center !bg-transparent',
          head_cell: 'uppercase text-xs text-gray-400 font-medium pt-1 pb-2',
          button: 'text-gray-700 cursor-pointer w-10 h-10 hover:bg-teal-100 rounded-full',
          day_today: 'bg-gray-100 font-bold text-gray-900',
          day_selected: '!bg-teal-900 text-white font-medium',
        }}
        formatters={{
          formatCaption: (date, options) => {
            return (
              <span className="text-gray-900 tracking-[-0.408px] font-medium">
                {capitalizeFirstLetter(format(date, 'LLLL yyyy', options))}
              </span>
            );
          },
        }}
      />
    </div>
  );
}
