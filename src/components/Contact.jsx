function Contact() {
  return (
    <div className="contact-me">
      <h3>Contact Me</h3>

      <form className="was-validated">
        <div>
          <label for="name">Name:</label>
          <input 
            type="text"
            placeholder="Your name"
            name="name"
            required
          ></input>
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            required
          ></input>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea
            type="message"
            placeholder="Short message"
            name="message"
          ></textarea>
        </div>
        <button className="btn btn-primary" type="reset">Reset</button>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
      <div>
        <a target="_blank" href="mailto:AndreTaylor681@gmail.com">
          Click to email me
        </a>
      </div>
    </div>
  );
}

export default Contact;
