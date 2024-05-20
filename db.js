import pg from 'pg'

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'example',
})

await client.connect()


export async function createToDo({text, done}){
    return await client.query(`
    INSERT INTO todo (text, done)
    VALUES ($1, $2)
    RETURNING *
    `, [text, done])
}

export async function getAllToDo(){
    return await client.query(`
    SELECT * FROM todo
    `)
}

export async function deleteToDo(id){
    return await client.query(`
    DELETE FROM todo
    WHERE id = $1
    `, [id])
}

export async function donestatus(id){
    return await client.query(`
    UPDATE todo SET done = NOT done WHERE id = ${id}`)
}
