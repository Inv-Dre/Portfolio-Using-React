function Project (props){
    return (
        <>
        <div>
            <h4>{props.title}</h4>
            <img src ={props.image} alt= 'pic of app'/>
        </div>
        <div>
            <p>{props.description}</p>
            <a target='_blank' rel='' href= {props.link} >Deployed Link</a>
            <a target='_blank' rel='' href= {props.github} >Github Repo</a>
        </div>
        
        </>
    )
}

export default Project;