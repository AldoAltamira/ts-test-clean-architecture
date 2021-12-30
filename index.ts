import type { Ordenes } from "./Librerias/Ordenes/Dominio/OrdenesEntity";
import OrdenesService from "./Librerias/Ordenes/Controller/OrdenController";
import UsuariosService from "./Librerias/Usuarios/Controller/OrdenController";
// import Mongo from "./Librerias/Infra/Mongo";
// import Mongo from "./Infra/Persistence/Ordenes";

//Probar la restriccion de mi modelo

const editarOrden: Ordenes = {
  id: "123",
  description: "Pantalon",
  price: 123,
  date: new Date(),
  type: "MKP-1",
};

const nuevaOrden: Ordenes = {
  id: "2",
  description: "jeans",
  price: 123,
  date: new Date(),
  type: "PARIS",
};

//Framework

const ordenesService = new OrdenesService();

const userService = new UsuariosService();

// RUTA edit/ordenes/:id
const editOrden = async () => {
  try {
    const save = await ordenesService.editarOrden(editarOrden);
    console.log({ status: 200, message: save });
  } catch (e: any) {
    console.error({ status: 500, message: e.message });
  }
};
// console.log("Llamando a edit/ordenes/:id");
// editOrden();

// RUTA create/ordenes
const createOrden = async () => {
  try {
    const save = await ordenesService.crearOrden(nuevaOrden);
    console.log({ status: 200, message: save });
  } catch (e: any) {
    console.log({ status: 500, message: e.message });
  }
};

console.log("Llamando a create/ordenes");
createOrden();
