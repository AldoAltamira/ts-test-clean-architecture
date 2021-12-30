import type { Ordenes } from "../../Dominio/OrdenesEntity";

export default class Mongo {
  constructor() {}
  save(orden: Ordenes) {
    return "Almacenado en BD";
  }
}
