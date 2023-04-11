import React, { useState }  from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'




const Contact = () => {
  
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [textArea, setTextArea] = useState('')

  const [err, setErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!fullName || !email || !textArea) {
      setErr(true)
    }
  } 

  return (
    <div>
      
      <h2> Contact Me </h2>

      <Form onSubmit={handleSubmit}>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
  {err && !fullName &&
      <p>You must include full name</p>
      }
</div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
  {err && !email &&
      <p>You must include an Email</p>
      }
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
  <textarea className="form-control" onChange={(e) => setTextArea(e.target.value)} value={textArea} id="exampleFormControlTextarea1" rows="3"></textarea>
  {err && !textArea &&
      <p>You must include a descriptive message</p>
      }
</div>
      <Button type="submit">Submit</Button>
      
     
      </Form>
    
    
    </div>
  );
};



export default Contact;
