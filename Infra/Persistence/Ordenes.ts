import type { Ordenes } from "../../Ordenes/OrdenesEntity";

export default class Mongo {
  constructor() {}
  save(orden: Ordenes) {
    return "Almacenado en BD";
  }
}
