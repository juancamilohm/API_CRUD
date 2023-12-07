//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const ContactModel = db.define('contacts', {
     name: { type: DataTypes.STRING },
     last_name: { type: DataTypes.STRING },
     cell_phone_number: { type: DataTypes.STRING },
     landline: { type: DataTypes.STRING },
     email: { type: DataTypes.STRING },
     address: { type: DataTypes.STRING },
 })

 export default ContactModel