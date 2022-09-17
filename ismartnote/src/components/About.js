
import React from 'react'
// import NoteContext from '../context/note/noteContext'
import image from './abt.jpg'
function About() {
   
    
  return (
    <div className='container'>
      <div className="container">
      <h2>We're a team of expert Cloud Service Providers</h2>
      <p style={{fontSize:'1.1rem'}}>We are a diverse team with unique perspectives. United in our purpose, our strategy and our culture. Driven by our ambition and the power of technology to drive human progress. Unwavering in our commitment to equality, trust and advocacy for one another.</p>
      </div>      
        <h4 className='mt-4'>Our Purpose</h4>
        <div className="row"> 
           <div className="col col-md-6 col-sm-12">
          <img style={{width:'40vw'}} src={image} alt="Not found"/ ></div>
          <div className={`col col-md-6 col-sm-12`}>
            <h2 style={{fontSize:'2.3rem',fontStyle:'oblique'}}>We create technologies that drive human progress</h2>
             <p style={{padding:'10px 20px'}}>Our story began with a belief and a passion: that everybody should have easy access to the best technology anywhere in the world. That was in 1984 in Michael Dell’s University of Texas dorm room. Today, Dell Technologies is instrumental in changing the digital landscape the world</p>
             {/* <p style={{padding:'10px 20px'}}>We are among the world’s leading technology companies helping to transform people’s lives with extraordinary capabilities. From hybrid cloud solutions to high-performance computing to ambitious social impact and sustainability initiatives, what we do impacts everyone, everywhere.</p> */}
          </div>
        </div>
    </div>
  )
}

export default About