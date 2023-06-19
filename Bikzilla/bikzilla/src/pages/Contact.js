import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return(
    <Layout>
      <div className="Container  mt-4 ">
         <h1> 
          Contact Page
         </h1>
         <div className=" form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="message"
                  onChange={(e) => {
                    
                  }}
                />
                <label htmlFor="floatingTextarea"> your message</label>
              
              <button className="btn btn-primary mt-2">Send Message</button>
             
              <h4>Hi user!
          sorry for the inconvenience
          this function requires permission from 
          firebase (as it should be connecting to multi user email)</h4>
      </div>
      </div>
      
    </Layout>
  )
}

export default Contact;