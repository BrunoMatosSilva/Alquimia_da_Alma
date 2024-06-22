import { create } from "./create";
import { remove } from "./delete";
import { download } from "./download";
import { getAll } from "./getAll";

export const FileService = {
  create,
  getAll,
  download,
  remove
}