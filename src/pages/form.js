//import * as React from "react"
//import { Link, graphql } from 'gatsby';
import React, {useState, useRef} from "react"
import Layout from '../components/layout'
//import { navigate } from "gatsby"

const FormPage = () => {
const [msg, setMsg] = useState();
const formRef = useRef(null);
const handleSubmit = (event) => {
event.preventDefault();
const myForm = event.target;
const formData = new FormData(myForm); 
const encData = new URLSearchParams(formData).toString()
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encData,
    })
    .then(() => {
        console.log(encData)
        setMsg(<p>Thank you for your form!</p>);
        formRef.current.reset();
        })
        .catch((error) => alert(error));
    };
    
    return (
    <Layout>
    <div>
    <h3>Contact Form</h3>
        { msg }
        <form method="post" 
        name="Data Form" 
        data-netlify="true"
        onSubmit={handleSubmit}
        ref={formRef}>
        <input type="hidden" name="form-name" value="Data Form"/>
        <label>
        Name
        <input type="text" name="name" id="name" />
        </label><br/><br/>
        <label>
        Email
        <input type="email" name="email" id="email" />
        </label><br/><br/>
        <label>
        Comments
        <input type="textarea" name="comments" id="comments" />
        </label><br/><br/>     
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
        </form>
        </div>
      </Layout>
    )
  }
  
  
  export default FormPage