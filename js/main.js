import { getAllDataReady, getAllDataOnHold, AddAllData, changeStatusToReady, deleteTaskReady } from "./module/crud.js";
import { Tasknormal, TaskTachada, TaskSinB } from "./components/tasks.js";

document.addEventListener("DOMContentLoaded", async () => {
    const space__index1 = document.querySelector(".space1");
    const space__index2 = document.querySelector(".space2");
    const Search__bar = document.querySelector("#Search__bar");

    //mostrar ambos estados de la tarea 
    const loadTasks = async () => {
        const OnHold = await getAllDataOnHold();
        space__index1.innerHTML = await Tasknormal(OnHold);

        const ready = await getAllDataReady();
        space__index2.innerHTML = await TaskTachada(ready);
    };

  
    loadTasks();

    // add una nueva tarea 
    Search__bar.addEventListener("change", async (e) => {
        const text = e.target.value.trim();
        if (text !== "") {
            e.target.value = "";

            const newTask = { task: text, status: "On hold" };
            await AddAllData(newTask);

            await loadTasks(); 
        }
    });
    //cambiar estado de on hold a ready 

    space__index1.addEventListener("click", async (e) => {
        if (e.target.classList.contains("check")) {
            const id = e.target.dataset.id;
            await changeStatusToReady(id, 'ready');
            await loadTasks(); 
        }
    });

    //eliminar tarea
    document.addEventListener("click", async (e) => {
        if (e.target.classList.contains("trash")) {
            const id = e.target.dataset.id;
            await deleteTaskReady(id);
            await loadTasks(); // Actualizar la lista de tareas
        }
    });
});



// Time
const dateTimeParagraph = document.querySelector('#time');
function updateDateTime() {
    const now = new Date();
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    dateTimeParagraph.textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);