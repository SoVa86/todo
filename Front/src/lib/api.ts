import axios from "axios"; 

const baseURL = 'http://localhost:3000'

interface ItemToDo{
    id?: number,
    text: string,
    done?: boolean
}

async function getToDo(): Promise<Array<ItemToDo>>{
    const res = await axios.get(`${baseURL}/todo`)
    return res.data;
}

async function createToDo(dto: ItemToDo){
    return await axios.post(`${baseURL}/todo`, dto)
}

async function deleteToDo(id: number){
    return await axios.delete(`${baseURL}/todo/${id}`)
}

async function doneStatus(id: number){
    return await axios.patch(`${baseURL}/todo/${id}`)
}


export const ApiModule = {
    getToDo,
    createToDo,
    deleteToDo,
    doneStatus
}
