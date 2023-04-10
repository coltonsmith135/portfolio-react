import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
const Contact = () => {
  return (
    <div>
      
      <h2> Contact Me </h2>

      <Form>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
</div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </Form>
    
      <Button>Submit</Button>
    
    </div>
  );
};

export default Contact;
