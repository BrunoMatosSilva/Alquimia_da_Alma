import { useState } from "react";
import { cn } from "@/lib/utils";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { DatePicker } from "./DatePicker";
import { PopoverComponents } from "./Popover";
import { formatDate } from "@/app/utils/formatDate";

interface DatePickerInputProps {
  className?: string;
  error?: string;
  value?: Date;
  onChange?(date: Date): void;
}

export function DatePickerInput({ className, error, value, onChange }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleDateChange(date: Date) {
    setSelectedDate(date)
    onChange?.(date)
  }

  return(
    <div>
      <PopoverComponents.Root>
        <PopoverComponents.Trigger>
       <button
       type="button"
       className={cn('bg-white w-full text-left relative px-3 pt-4 rounded-lg border border-gray-500 h-[52px] text-gray-800 placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
       error && '!border-red-900', className)}
       >

        <span className="text-xs left-[13px] top-2 pointer-events-none absolute">Data</span>

        <span>{formatDate(selectedDate)}</span>

      </button>
      </PopoverComponents.Trigger>

      <PopoverComponents.Content className="w-full">
        <DatePicker
        value={selectedDate}
        onChange={handleDateChange} />
      </PopoverComponents.Content>
      </PopoverComponents.Root>
      {error &&  (
        <div className="flex gap-2 items-center mt-2 text-red-600">
          <CrossCircledIcon />
          <span className="text-xs flex gap-2">{error}</span>
        </div>
      )}
    </div>
  )
}