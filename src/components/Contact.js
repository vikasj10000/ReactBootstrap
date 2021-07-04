import { useState } from "react";

function Contact() {
    const [data, setData] = useState({
      fullname : " ", 
      phone : " ",
      email : " ",
      message : " "
    });


    const formSubmit = (e) => {
        e.preventDefault();
        alert("your form has been submitted sucessfully!");
                           }
    return (
        
       <>
                 <div className="my-5">
                  <h1 className="text-center">Contact US</h1>
                 </div>

                 <div className="container contact_div">
                     <div className="row">
                         <div className="col-md-6 col-10 max-auto">
            <form onSubmit={formSubmit}>

            <div class="mb-3">
               <label for="exampleInputName" 
               class="form-label">Name</label>
               <input type="name" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="Help" 
                      placeholder="Enter Your Name"
                      name="name"
                      value={data.fullname}
                      onChange={InputEvent}

                />
            </div>

            <div class="mb-3">
               <label for="exampleInputName" class="form-label">Number</label>
               <input type="number"
                      maxLength="12" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="Help"
                      placeholder="+91 1234567890"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}

                />
            </div> 

               <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label">Email address</label>
               <input type="email" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      placeholder="Example@gmail.com"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}

                      />


               <div id="emailHelp" class="form-text">We Respect your privacy</div>
               </div>
  
              <div class="mb-3">
              <textarea
                type="text"
                name="message"
                value={data.message}
                onChange={InputEvent}>
              </textarea>  
             </div>
              
              <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              
              
              <button type="submit" class="btn  btn-success">Submit</button>

            </form>
                         </div>
                     </div>
                 </div>
       </>
        
    )
}

export default Contact
