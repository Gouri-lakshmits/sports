import React from 'react'
import '../../App.css'
import {Form , Button} from 'react-bootstrap';
import './Signup.css';

export default function SignUp(){
 return (
     <div className='sign-up'>+
 <Form className='form'>
   <center>  <h5 className='headings'>Sign Up</h5></center>
  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label className='formlabel'>USERNAME</Form.Label>
    <Form.Control type="text" placeholder="enter username"/>
  </Form.Group>
  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label className='formlabel'>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com"/>
  </Form.Group>
  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label className='formlabel'>Password</Form.Label>
    <Form.Control type="password" placeholder="enter password"/>
  </Form.Group> 
 <center> <Button variant="success">Sign up</Button></center>
  </Form>
  </div>
 )
}