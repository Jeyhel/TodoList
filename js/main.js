import { getAllDataReady, getAllDataOnHold, AddAllData} from "./module/crud.js"
import {Tasknormal, TaskTachada} from "./components/tasks.js"



let space__index1 = document.querySelector(".space1");
let space__index2 = document.querySelector(".space2");


    addEventListener("DOMContentLoaded", async() => {
        let OnHold  = await getAllDataReady();
        space__index1.innerHTML = await Tasknormal(OnHold);
        let ready  = await getAllDataOnHold();
        space__index2.innerHTML = await TaskTachada(ready);
    });



// const AddTarea = async () => {
    //     let act = {};
    //     act.task = prompt("Ingrese la tarea:");
    //     act.status = "On Hold";
    //     let resultado = await AddAllData(act);
    //     console.log(resultado);
    // };
    
    // AddTarea();
