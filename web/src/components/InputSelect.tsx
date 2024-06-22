import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CrossCircledIcon } from "@radix-ui/react-icons";

interface InputSelectProps {
  name?: string;
  error?: string;
  placeholder?: string
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?(value: string): void;
  className?: string;
}

export function InputSelect({className, error, placeholder , options, value, onChange}: InputSelectProps) {
  function handleSelect(value: string) {
    onChange?.(value)
  }

  return (
    <>
    <Select value={value} onValueChange={handleSelect} >
      <SelectTrigger className={cn(
        'text-base bg-white w-full rounded-lg border border-gray-500 h-[52px] text-gray-800 focus:border-gray-800 transition-all outline-none',
        error && '!border-red-600', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-h-64 overflow-y-auto">
        {options.map(option => (
          <SelectItem
          key={option.value}
          value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>

    </Select>
        {error &&  (
          <div className="flex gap-2 items-center mt-2 text-red-600">
            <CrossCircledIcon />
            <span className="text-xs flex gap-2">{error}</span>
          </div>
        )}
    </>
    )
}