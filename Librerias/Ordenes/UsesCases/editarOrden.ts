import type { Ordenes } from "../Dominio/OrdenesEntity";
import { IModel, OrdenesModel } from "../Dominio/OrdenesModel";

export interface IUCOrdenEditar {
  editarOrden: (ordenes: Ordenes) => Ordenes | boolean;
}

export class UCOrdenesEditar implements IUCOrdenEditar {
  protected ordenes: IModel;
  constructor() {
    this.ordenes = new OrdenesModel();
  }
  editarOrden = (orden: Ordenes): Ordenes | boolean => {
    return this.ordenes.edit(orden);
  };
}

/*export const editarOrden = (orden: Ordenes): Ordenes | boolean => {
  const ordenModel = new OrdenesModel();
  return ordenModel.edit(orden);
};*/
