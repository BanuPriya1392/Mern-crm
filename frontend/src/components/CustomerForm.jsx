import { useState } from "react";
import API from "../services/api";

function CustomerForm(){

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [phone,setPhone] = useState("");

 const addCustomer = async () => {

   await API.post("/customers",{
     name,
     email,
     phone
   });

   alert("Customer Added");

 };

 return(

  <div>

   <h3>Add Customer</h3>

   <input placeholder="Name"
   onChange={(e)=>setName(e.target.value)}
   />

   <input placeholder="Email"
   onChange={(e)=>setEmail(e.target.value)}
   />

   <input placeholder="Phone"
   onChange={(e)=>setPhone(e.target.value)}
   />

   <button onClick={addCustomer}>Add</button>

  </div>

 );

}

export default CustomerForm;