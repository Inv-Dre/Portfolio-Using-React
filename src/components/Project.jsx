function Project (){
    return (
        <>
        <div>
            <div id= "about-me">
                <h2>About Me</h2>
                <p> 
                        Hello, my name is Andre Taylor II. I have been interested in coding for a while now.
                        I attempted to learn how to code using Youtube and cheaper online classes, before enrolling in the 
                        University of California, Berkeley Bootcamp. Not having someone to talk to when i needed it, is what lead me to the bootcamp. 
                        Even before trying to code on my own, I took a class on coding  while in college. I was an Enginnering major.
                        I have a little bit of experience with Python, JavaScript, and HTML.
                </p>

            </div>
            <div id="portfolio">
                <h2>Portfolio</h2>
                <a href='https://inv-dre.github.io/02-challenge-hw/' target='_blank'><img src='https://user-images.githubusercontent.com/135474781/246306828-269367c7-8c83-4d14-bb5d-06a6122bab1c.png' alt="Horiseon Assignment" class="first-app"/>Horiseon Assignment</a>
                <a href='https://srvidales.github.io/omicron/' target='_blank' ><img src='https://github.com/srvidales/omicron/raw/main/screenshot.png' alt="Omicron Star Wars AI"/>Omicron Project</a>
                <a href='https://cookie-monster-mvc-b8ff3eb840fd.herokuapp.com/' target='_blank' ><img src='https://user-images.githubusercontent.com/135474781/273002185-a80c3716-9fab-40d8-aa89-5afa2abd23cf.png' alt="Cookie Monster Marketplace"/>Cookie Monster Marketplace</a>

            </div>
            
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

        </div>
        </>
    )
}

export default Project;