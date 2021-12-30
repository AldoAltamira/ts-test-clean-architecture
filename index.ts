import type { Ordenes } from "./Ordenes/OrdenesEntity";
import OrdenesService from "./Controller/OrdenController";
import Mongo from "./Infra/Persistence/Ordenes";

//Probar la restriccion de mi modelo

const nuevaOrden: Ordenes = {
  id: "123",
  description: "Pantalon",
  price: 123,
  date: new Date(),
  type: "MKP1",
};

//Framework

const mongo = new Mongo();
const ordenesService = new OrdenesService(mongo);
const editOrden = async () => {
  try {
    await ordenesService.editarOrden(nuevaOrden);
  } catch (e: any) {
    console.log("error", e.message);
  }
};

editOrden();
