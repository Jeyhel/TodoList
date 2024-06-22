
import {getAllData} from "./module/crud.js"

const AddTarea = async () => {
    let act = {};
    act.task = prompt("Ingrese la tarea:");
    act.status = "On Hold";
    let resultado = await getAllData(act);
    console.log(resultado);
};

AddTarea();