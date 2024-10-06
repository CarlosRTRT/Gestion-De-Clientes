import {pool} from '../databaseConnection.js'
import express from 'express'



export const getAllClients = async(req, res) =>{
    try{

        const [rows] = await pool.query('SELECT * FROM clientsbakery')

        res.json(rows)

    }catch{
        console.log("Error getting all clients")
    }

}

export const getClient = async(req, res)=>{
    const id = req.params.id;
    try{

        const [data] = await pool.query('SELECT * FROM clientsbakery WHERE id = ?', [id])

        res.json(data)

    }catch{
        console.log("error getting client data");
    }
}
export const createdClient = async(req,res) => {

    let data = req.body;

    let name = data.nom;
    let lastname = data.apelli1;
    let secondname = data.apelli2;
    let phone = data.tel;
    let deuda = data.deuda

    const [dat] = await pool.query('INSERT INTO clientsbakery(nombre, apellido1, apellido2, telefono, deuda) VALUES (?,?,?,?,?)', [name,lastname,secondname,phone,deuda])
    res.redirect('/clienteCreado')

} 

export const deleteClient = async(req, res)=>{
    let id = req.params.id;
    try{
    
        const [deleted] = await pool.query("DELETE * FROM clientsbakery WHERE id = ?", [id])

        res.json({

            "message" : "client deleted"

        })

    }catch{
        console.log("error deleting the client");
    }

    
}
export const updateClient = async(req, res)=> {
    let id = req.params.id;
    let {nombre, apellido1, apellido2, telefono, deuda, pagado} = req.body;

    try{

        const [update] = await pool.query('UPDATE clientsbakery SET nombre = IFNULL(?, nombre), apellido1 = IFNULL(?, apellido1), apellido2 = IFNULL(?, apellido2), telefono = IFNULL(?, telefono), deuda = IFNULL(?, deuda), pagado = IFNULL(?, pagado) WHERE id = ?', [nombre, apellido1, apellido2, telefono, deuda, pagado, id])

        const [rows] = await pool.query('SELECT * FROM clientsbakery WHERE id = ?', [id])

        res.json(rows)

    }catch{
        console.log("Error updating the Client")
    }
    
}
