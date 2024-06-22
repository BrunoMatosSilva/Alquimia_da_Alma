import { cn } from "@/lib/utils";
import { useSwiper } from "swiper/react";

interface SliderOptionProps {
  day: string;
  isActive: boolean;
  index: number;
}

export function SliderOption({ day, isActive, index }:SliderOptionProps) {
  const swiper = useSwiper()

  return (
    <button
    onClick={() => swiper.slideTo(index)}
    className={cn(
      "w-full rounded-full h-12 text-sm text-primary tracking-[-0.5px]",
      isActive && "bg-primary text-secondary font-semibold"
    )}
    >
      {day}
    </button>
  )
}