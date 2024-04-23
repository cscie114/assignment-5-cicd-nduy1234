import React, {useState, useRef} from "react";
import Layout from "../components/layout";
import { navigate } from "gatsby";

const FormPage = () => {
const handleSubmit = (event) => {
event.preventDefault();
const myForm = event.target;
const formData = new FormData(myForm); 
const aData = new URLSearchParams(formData).toString()
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: aData,
    })
    .then(() => {
        console.log(aData)
        navigate("/confirm/")
        })
    .catch((error) => console.log(error));
    };
    
    return (
    <Layout>
    <div>
    <h2>Contact Form</h2>     
        <form method="post" 
        name="Data Form" 
        data-netlify="true"
        onSubmit={handleSubmit}>
        <input type="hidden" name="name" value="Data Form"/>
        <label>
        <p>Name</p>
        <input type="text" name="name"/>
        </label>
        <label>
        <p>Email</p>
        <input type="email" name="email"/>
        </label>
        <label>
        <p>Phone</p>
        <input type="phone" name="phone"/>
        </label>
        <label>
        <p>Comments</p>
        <textarea name="comments"></textarea>
        </label><br/>    
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
        </form>
        </div>
      </Layout>
    )
  }
  
export default FormPage;