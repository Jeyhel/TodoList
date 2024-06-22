//GET ALL
export const getAllDataReady = async () => {
    const response = await fetch("https://6675fb47a8d2b4d072f2149f.mockapi.io/ToDoList", {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const result = await response.json();
    const filterready = result.filter(item => item.status === "ready");

    return filterready;
};

    
export const getAllDataOnHold= async () => {
    const response = await fetch("https://6675fb47a8d2b4d072f2149f.mockapi.io/ToDoList", {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const result = await response.json();
    const filterready = result.filter(item => item.status === "On hold");

    return filterready;
};

    


//ADD
export const AddAllData = async(arg)=>{
    let val = await validategAddAllData (arg);
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
const validategAddAllData = async (act) => {
    if (typeof act.task !== "string" || act.task === undefined) {
        return { status: 406, message: "Los datos de la tarea no están correctamente" };
    }
};

const validateDeleteTask = async ({ id }) => {
    if (typeof id !== "string" || id === undefined) {
        return { status: 406, message: "El ID de la tarea no está llegando correctamente" };
    }
};