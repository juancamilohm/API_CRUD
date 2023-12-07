//importamos el Modelo
import ContactModel from "../models/ContactModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.findAll()
        res.json(contacts)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getContact = async (req, res) => {
        try {
            const contact = await ContactModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(contact[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createContact = async (req, res) => {
    try {
       await ContactModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateContact = async (req, res) => {
    try {
        await ContactModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteContact = async (req, res) => {
    try {
        await ContactModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}