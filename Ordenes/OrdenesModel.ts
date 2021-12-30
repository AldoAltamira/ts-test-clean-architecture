import type { Ordenes } from "./OrdenesEntity";

//Modelo

export const create = (orden: Ordenes) => orden;
export const edit = (orden: Ordenes) => (orden.type === "MKP" ? orden : false);
