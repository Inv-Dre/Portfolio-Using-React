import Project from './Project';

const projects =[
    {
        title: 'Cookie Monster MVC',
        description:'Ecommerce Website using MVC structures. The app is constructed using Express, Node, Sequelize, Sql, and Handlebars',
        image:'https://user-images.githubusercontent.com/135474781/273002185-a80c3716-9fab-40d8-aa89-5afa2abd23cf.png',
        github:'https://github.com/Inv-Dre/Cookie-Monster-MVC',
        link:'https://cookie-monster-mvc-b8ff3eb840fd.herokuapp.com/'
    },
    {
        title: 'Omicron',
        description:'This is a storytelling webapp where a user can choose their own starwars character, and with the aide of AI, create some fanfiction to add to the starwars universe.',
        image:'https://github.com/srvidales/omicron/raw/main/screenshot.png',
        github:'https://github.com/srvidales/omicron',
        link:'https://srvidales.github.io/omicron/'
    },
    {
        title: 'Password Generator',
        description:'Website that randomly creates a password for the user',
        image:'https://user-images.githubusercontent.com/135474781/251335173-1093d7d2-4785-4398-8a3c-aada7543d09c.png',
        github:'https://github.com/Inv-Dre/password-generator',
        link:'https://inv-dre.github.io/password-generator/'
    },
    {
        title: 'Timed Coding Quiz',
        description:'a timed quiz using web api concepts in js',
        image:'https://user-images.githubusercontent.com/135474781/280938596-0d4d203a-6eb0-4b96-af55-528d68211bfe.png',
        github:'https://github.com/Inv-Dre/Timed-Coding-Quiz-',
        link:'https://inv-dre.github.io/Timed-Coding-Quiz-/'
    },
    {
        title: 'Weather Wizard',
        description:'Using a weather api to get weather predictions for multiple cities. Information is gathered so the user can plan trips. I used two different apis to get information. Had to take the information from the first api to get the second api to function.',
        image:'https://user-images.githubusercontent.com/135474781/256451709-c369601a-a4b8-4230-a83a-39280605c409.png',
        github:'https://github.com/Inv-Dre/Weather-Wizard',
        link:'https://inv-dre.github.io/Weather-Wizard/'
    },
    {
        title: 'My Portfolio',
        description:'Website that acts as my personal portfolio. The website includes a title, picture of me, nav bar, an about me section,a my work section, a contact me section, and a footer. all of that is included in the html. There is a css style page that brings the site some originality',
        image:'https://user-images.githubusercontent.com/135474781/249048597-65606145-81bc-4f4d-8198-02c65bb003b0.png',
        github:'https://github.com/Inv-Dre/My-Portfolio-',
        link:'https://inv-dre.github.io/My-Portfolio-/'
    }
]

function Portfolio(){
    const project = projects.map((project)=>{ {project}})
   
    return(
        <div>
            <h2>PortFolio</h2>
        <Project key ={project.title} description= {project.description} image= {project.image} github={project.github} link={project.link}/>
        </div>
)}

export default Portfolio;