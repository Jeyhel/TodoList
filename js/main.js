import { getAllDataReady, getAllDataOnHold, AddAllData} from "./module/crud.js"
import {Tasknormal, TaskTachada, TaskSinB} from "./components/tasks.js"



let space__index1 = document.querySelector(".space1");
let space__index2 = document.querySelector(".space2");

let Search__bar = document.querySelector("#Search__bar");


    addEventListener("DOMContentLoaded", async() => {
        let OnHold  = await getAllDataOnHold();
        space__index1.innerHTML = await Tasknormal(OnHold);
        let ready  = await getAllDataReady();
        space__index2.innerHTML = await TaskTachada(ready);
        
    }); 
        
        
        Search__bar.addEventListener("change", (e) =>{
            let text = e.target.value
            Search__bar.value = null
            let search = TaskSinB(text)
            space__index1.innerHTML += search;
            let act = {};
            act.task = text
            act.status = "On hold";
            AddAllData (act);
      
    });