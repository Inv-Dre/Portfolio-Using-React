
function Contact (){
    return(
        <div id="contact-me">
        <h2> 
            Contact Me
        </h2>
        <form>
            <input type = 'text' placeholder = 'type your name' name = 'name'  ></input>
            <input type = 'text' placeholder = 'type your email' name = 'email'  ></input>
            <input type = 'text' placeholder = 'short message' name = 'message'  ></input>
        </form>
        </div>

    )
}

export default Contact;