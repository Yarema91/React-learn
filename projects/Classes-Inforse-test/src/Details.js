import React, { useState } from "react"
import ModalEdit from './Components/ModalEdit'

const Details = () => {
    const [modal, setModal]  = useState(false);
    const Toggle = () => setModal(!modal);
    return (
        <div>
            <h1>Details</h1>
            <button className='clickMe' onClick={()=> Toggle()}>Edit</button>
            <ModalEdit show={modal}  close={Toggle}  title='Edit description and properties'>
                
                This is modal dynamic contant 
                
                {/* <form action="create-form">  
                    <span>Name</span>
                    <input 
                    type="text" 
                    name='name' 
                    text='name' 
                    placeholder='name'
                    />
                </form> */}
                </ModalEdit>
        </div>
    )
}

export default Details
