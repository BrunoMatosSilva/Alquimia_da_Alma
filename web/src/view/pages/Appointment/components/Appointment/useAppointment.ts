import { useContext } from "react";
import { AppointmentContext } from ".";

export function useAppointment() {
  return useContext(AppointmentContext)
}