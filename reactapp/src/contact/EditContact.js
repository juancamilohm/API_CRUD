import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/contacts/'

const CompEditContact = () => {
    const [name, setName] = useState('')    
    const [last_name, setLastName] = useState('')
    const [cell_phone_number, setCellPhoneNumber] = useState('')    
    const [landline, setLandline] = useState('') 
    const [email, setEmail] = useState('')    
    const [address, setAddress] = useState('')     
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name: name,
            last_name: last_name,
            cell_phone_number: cell_phone_number,
            landline: landline,
            email: email,
            address: address
        })
        navigate('/')
    }

    useEffect( ()=>{
        getContactById()
    },[])

    const getContactById = async () => {
        const res = await axios.get(URI+id)
        setName(res.data.name)
        setLastName(res.data.last_name)
        setCellPhoneNumber(res.data.cell_phone_number)
        setLandline(res.data.landline)
        setEmail(res.data.email)
        setAddress(res.data.address)
    }

    return (
        <div>
        <h3>Edit CONTACT</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Last name</label>
                <textarea
                    value={last_name}
                    onChange={ (e)=> setLastName(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Cell phone number</label>
                <textarea
                    value={cell_phone_number}
                    onChange={ (e)=> setCellPhoneNumber(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div> 
            <div className="mb-3">
                <label  className="form-label">Landline</label>
                <textarea
                    value={landline}
                    onChange={ (e)=> setLandline(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div> 
            <div className="mb-3">
                <label  className="form-label">Email</label>
                <textarea
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div> 
            <div className="mb-3">
                <label  className="form-label">Address</label>
                <textarea
                    value={address}
                    onChange={ (e)=> setAddress(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>             
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditContact