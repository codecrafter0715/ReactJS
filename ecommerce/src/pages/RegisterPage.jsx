import React, { useState, useContext } from "react";
import formIamge from "../assets/formImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import {ThemeContext} from "../hooks/ThemeContext";

const RegisterPage = () => {

  const {theme} = useContext(ThemeContext);

    const [name, setName] =useState()
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

function handleFormData(){

    const payload = {name:name,email:email, password:password}
    console.log(payload);
    // setEmail('')
    // setPassword('')
    localStorage.setItem('user',JSON.stringify(payload))
    navigate('/login')
}

console.log(email, password);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={formIamge} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
          <form className={`
            ${theme == 'light'? 'bg-light text-dark' : 'bg-dark text-light'}
            `}>
          <h3>Register here</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

               <button className="btn btn-primary" onClick={handleFormData}>
              Register
            </button>
            <Link to='/login'>If already Registered</Link>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default RegisterPage;