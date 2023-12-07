import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/contacts/'


const CompShowContacts = () => {
    
    const [contacts, setContact] = useState([])
    useEffect( ()=>{
        getContacts()
    },[])

    //procedimineto para mostrar todos los contactos
    const getContacts = async () => {
        const res = await axios.get(URI)
        setContact(res.data)
    }

    //procedimineto para eliminar un contacto
    const deleteContact = async (id) => {
       await axios.delete(`${URI}${id}`)
       getContacts()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Cell Phone Number</th>
                                <th>Landline</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map ( (contact) => (
                                <tr key={ contact.id}>
                                    <td> { contact.name } </td>
                                    <td> { contact.last_name } </td>
                                    <td> { contact.cell_phone_number } </td>
                                    <td> { contact.landline } </td>
                                    <td> { contact.email } </td>
                                    <td> { contact.address } </td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteContact(contact.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowContacts