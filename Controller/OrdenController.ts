import type { Ordenes } from "../Ordenes/OrdenesEntity";
import { editarOrden } from "../UsesCases/editarOrden";

export default class OrdenesService {
  mongo: any;
  constructor(mongo: any) {
    this.mongo = mongo;
  }
  async editarOrden(orden: Ordenes): Promise<string> {
    try {
      const result = editarOrden(orden);
      if (typeof result === "boolean") throw new Error("Venia malo");
      return this.mongo.save(result);
    } catch (e) {
      throw new Error("Ta malo!");
    }
  }
}
