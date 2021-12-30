import type { Ordenes } from "../Dominio/OrdenesEntity";
import { IModel, OrdenesModel } from "../Dominio/OrdenesModel";

export interface IUCOrden {
  crearOrden: (ordenes: Ordenes) => Ordenes | boolean;
}

export class UCOrdenes implements IUCOrden {
  protected ordenes: IModel;
  constructor() {
    this.ordenes = new OrdenesModel();
  }
  crearOrden = (orden: Ordenes): Ordenes | boolean => {
    return this.ordenes.create(orden);
  };
}
