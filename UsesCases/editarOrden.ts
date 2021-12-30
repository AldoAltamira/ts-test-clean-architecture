import type { Ordenes } from "../Ordenes/OrdenesEntity";
import { edit } from "../Ordenes/OrdenesModel";

export const editarOrden = (orden: Ordenes): Ordenes | boolean => {
  return edit(orden);
};
