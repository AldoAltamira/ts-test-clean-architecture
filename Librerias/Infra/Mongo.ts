import type { Ordenes } from "../Ordenes/Dominio/OrdenesEntity";

export default class Mongo {
  constructor() {}
  save(orden: Ordenes) {
    return "Almacenado en BD";
  }
}
