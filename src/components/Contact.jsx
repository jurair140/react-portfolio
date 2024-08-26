import React from 'react'

function Contact() {
  return (
    <div className='container mt-5'>
        <h1>Contact Us</h1>
        <textarea name="" placeholder='enter your message' id="" className='form-control mb-2 container-fluid'></textarea><br />
        <input type="email" className='form-control mb-3 container-fluid' placeholder='enter your Email ' /> <br />
        <button className=' btn btn-success mb-5'>sent</button>
    </div>
  )
}

export default Contact
