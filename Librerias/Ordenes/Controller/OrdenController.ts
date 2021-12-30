import type { Ordenes } from "../Dominio/OrdenesEntity";
import { IUCOrdenEditar, UCOrdenesEditar } from "../UsesCases/editarOrden";
import { IUCOrden, UCOrdenes } from "../UsesCases/crearOrden";
import Mongo from "../Infra/Persistence/Ordenes";

export interface IOrdenesService {
  editarOrden: (ordenes: Ordenes) => Promise<string>;
  crearOrden: (ordenes: Ordenes) => Promise<Ordenes>;
}

export default class OrdenesService implements IOrdenesService {
  mongo: any;
  protected ucOrdenes: IUCOrden;
  protected uCOrdenesEditar: IUCOrdenEditar;
  constructor() {
    this.mongo = new Mongo();
    this.ucOrdenes = new UCOrdenes();
    this.uCOrdenesEditar = new UCOrdenesEditar();
  }
  async editarOrden(orden: Ordenes): Promise<string> {
    try {
      const result = this.uCOrdenesEditar.editarOrden(orden);
      if (typeof result === "boolean") throw new Error("Venia malo");
      return this.mongo.save(result);
    } catch (e) {
      throw new Error("No se pudo editar!");
    }
  }

  async crearOrden(ordenes: Ordenes): Promise<Ordenes> {
    try {
      const result = this.ucOrdenes.crearOrden(ordenes);
      if (typeof result === "boolean") throw new Error("Venia malo");
      return this.mongo.save(result);
    } catch (e) {
      throw new Error("No se pudo crear!");
    }
  }
}
