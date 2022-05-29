import React from 'react';
import './form.css';


const Form=(props)=>{
    const handleChange=(event)=>{
          props.setFormData({...props.formData,[event.target.id]:event.target.value})
    }
    const handleClick=(event)=>{
        event.preventDefault()
        console.log(JSON.stringify(props.formData))
    }
    const handleChangeCheckBox=(event)=>{
        props.setFormData({...props.formData,exampleCheck1:event.target.checked})
    }
    return(
   <div className='form'>
    <div className='formContent'>  
    <div className="form-group">
      <label for="exampleInputName">full name</label>
      <input value={props.formData.exampleInputName} onChange={handleChange} type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="please enter your name"/>
   </div>  
   <div className="form-group">
      <label for="exampleInputEmail">Email address</label>
      <input value={props.formData.exampleInputEmail} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="please enter your email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div className="form-group">
      <label for="exampleInputPassword">Password</label>
      <input value={props.formData.exampleInputPassword1} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
   </div>
   <div className="form-check">
   <label className="" for="exampleCheck1">
      <input  defaultChecked={props.formData.exampleCheck1} onChange={handleChangeCheckBox} type="checkbox" className="form-check-input" id="exampleCheck1"/>
       Check me out</label>
   </div>
  <button onClick={handleClick} className="btn1 btn-primary">Submit</button>
  </div>

  </div>
    )
}
export default Form