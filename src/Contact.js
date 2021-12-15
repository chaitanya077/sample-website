import React,{useState} from 'react';


const Contact = ()=>{
    const[data, setData] = useState({
        fullName:"",
        phone:"",
        email:"",
        msg:""
    });
    const InputEvent =(event)=>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value, 
            };
        }); 
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullName}. My mobile number is ${data.phone}. And email is ${data.email}. Message is ${data.msg}`);

    };
    return (
        <>
         <div className="my-5">
             <h1 className="text-center">Contact US</h1>
         </div>
         <div className="container contact_div">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
                

                     <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name:</label>
    <input type="text" name="fullName" value={data.fullName} onChange={InputEvent} required=""  className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone Number:</label>
    <input type="number"  name="phone" value={data.phone} onChange={InputEvent} required="" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number:" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" name="email" value={data.email} onChange={InputEvent}  required="" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
  </div>
  <div className="col-12 mt-2">
  <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>

                         
                    
                 </div>
             </div>
         </div>
        </>
    )
};
export default Contact;