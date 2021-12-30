import type { Ordenes } from "./OrdenesEntity";

//Modelo

export interface IModel {
  create: (ordenes: Ordenes) => Ordenes | boolean;
  edit: (ordenes: Ordenes) => Ordenes | boolean;
}

export class OrdenesModel implements IModel {
  constructor() {}
  create = (orden: Ordenes) => (Number(orden.id) > 1 ? orden : false);
  edit = (orden: Ordenes) => (orden.type === "MKP" ? orden : false);
}

//export const create = (orden: Ordenes) => orden;
//export const edit = (orden: Ordenes) => (orden.type === 'MKP' ? orden : false);
