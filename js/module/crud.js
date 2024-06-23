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



//VALIDACIONES
const validategAddAllData = async (act) => {
    if (typeof act.task !== "string" || act.task === undefined) {
        return { status: 406, message: "Los datos de la tarea no están correctamente" };
    }
};



// PUT
export const changeStatusToReady = async (id, status) => {
    const url = `https://6675fb47a8d2b4d072f2149f.mockapi.io/ToDoList/${id}`;
    const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error changing status to ready:", error);
    }
};


// DELETE
export const deleteTaskReady = async(id) => {
    const url = `https://6675fb47a8d2b4d072f2149f.mockapi.io/ToDoList/${id}`;
    const options = { 
        method: "DELETE",
        headers: {"content-type": "application/json"},
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}