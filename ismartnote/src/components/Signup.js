import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [content, setContent] = useState({ name: '', email: '', password: '', cpassword: '' });
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.password === content.cpassword) {
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: content.name, email: content.email, password: content.password }) // body data type must match "Content-Type" header
      });
      let data = await response.json();
      if (data.success) {
        localStorage.setItem('token', data.token);
        history('/')
      }
      else {
        alert('Invalid user email');
      }
    }
    else {
      alert("Password didn't match");
    }
  }
  let onChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form className='container text-start' style={{ width: '60%' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' id="name" onChange={onChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' required onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' id="password" minLength={5} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name='cpassword' id="cpassword" minLength={5} onChange={onChange} required />
        </div>

        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </>
  )
}

export default Signup