import { create } from "./create";
import { forget } from "./forget";
import { reset } from "./reset";
import { signin } from "./signin";

export const authService = {
  create,
  signin,
  forget,
  reset
}