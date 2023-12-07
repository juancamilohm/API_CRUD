import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/contacts/'

const CompCreateContact = () => {
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [cell_phone_number, setCellPhoneNumber] = useState('')
    const [landline, setLandline] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, last_name:last_name, cell_phone_number:cell_phone_number, landline:landline, email:email, address:address})
        navigate('/')
    }   

    return (
        <div>
           <h3>Create CONTACT</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Last Name</label>
                    <textarea
                        value={last_name}
                        onChange={ (e)=> setLastName(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>
                 <div className='mb-3'>
                     <label className='form-label'>Cell Phone Number</label>
                    <textarea
                        value={cell_phone_number}
                        onChange={ (e)=> setCellPhoneNumber(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div> <div className='mb-3'>
                     <label className='form-label'>Landline</label>
                    <textarea
                        value={landline}
                        onChange={ (e)=> setLandline(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div> <div className='mb-3'>
                     <label className='form-label'>Email</label>
                    <textarea
                        value={email}
                        onChange={ (e)=> setEmail(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div> <div className='mb-3'>
                     <label className='form-label'>Address</label>
                    <textarea
                        value={address}
                        onChange={ (e)=> setAddress(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Contact Book</button>                  
           </form>
        </div>
    )
}

export default CompCreateContact