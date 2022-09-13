import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [content, setContent] = useState({email:'',password:''});
    const history = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:content.email, password:content.password }) // body data type must match "Content-Type" header
          });
          let data= await response.json();
          if(data.success)
          {localStorage.setItem('token',data.token);
          history('/');}
          else
          alert("invalid credentials");
          console.log(data);
    }
    let onChange=(e)=>{
        setContent({...content,[e.target.name]:e.target.value});
    }
    return (
        <>
            <form className='container text-start' style={{width:'60%'}} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
                 
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={onChange}  />
                </div>
               
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </>

    )
}

export default Login