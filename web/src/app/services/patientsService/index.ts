import { create } from "./create";
import { remove } from "./delete";
import { getAll } from "./getAll";
import { search } from "./search";
import { update } from "./update";

export const PatientService = {
  create,
  getAll,
  update,
  remove,
  search
}