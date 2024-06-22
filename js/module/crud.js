export const getAllData = async(arg)=>{
    let val = await validategetAllData (arg);
    if (val) return val;
    let config = {  
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body : JSON.stringify(arg)

   }
   
    let res = await fetch ("https://6675fb47a8d2b4d072f2149f.mockapi.io/ToDoList", config);
    let data = res.json();
    return data;
}


export const DeleteTask  = async(arg)=>{
    let val = await validateDeleteTask (arg);
    if (val) return val;
    let config = {  
        method: 'DELETE',
        body : JSON.stringify(arg)
    }
    let res = await fetch ("https://6675fb47a8d2b4d072f2149f.mockapi.io/ToDoList", config);
    let data = res.json();
    return data;
}

//VALIDACIONES
const validategetAllData = async (act) => {
    if (typeof act.task !== "string" || act.task === undefined) {
        return { status: 406, message: "Los datos de la tarea no están correctamente" };
    }
};

const validateDeleteTask = async ({ id }) => {
    if (typeof id !== "string" || id === undefined) {
        return { status: 406, message: "El ID de la tarea no está llegando correctamente" };
    }
};