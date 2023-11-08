function Project (props){
    return (
        <>
        <div className="projects">
        <h6>{props.title}</h6> 
        <a target='_blank' href= {props.link} ><img src ={props.image} alt= 'pic of app'/></a>
        <div className="description">
            <p>{props.description}</p>
         </div>  
         <div>
            <a target='_blank'  href= {props.github} >Github Repo</a>
        </div>
        </div>
        </>
    )
}

export default Project;