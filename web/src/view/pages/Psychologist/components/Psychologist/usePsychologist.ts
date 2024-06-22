import { useContext } from "react";
import { PsychologistContext } from ".";

export function usePsychologist() {
  return useContext(PsychologistContext)
}