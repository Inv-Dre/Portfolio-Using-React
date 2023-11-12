
function Contact (){
    return(
        <div className="contact-me">
        <h3> 
            Contact Me
        </h3>
        <form>
           <input type = 'text' placeholder = 'type your name' name = 'name'  ></input>
        </form>
        <form>  
            <input type = 'text' placeholder = 'type your email' name = 'email'  ></input>
        </form> 
        <form>
            <input type = 'text' placeholder = 'short message' name = 'message' ></input>
        </form>
        </div>

    )
}

export default Contact;