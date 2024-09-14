function Project(props) {
    return ( 
        <div className="project-box col  p-5 pb-0 position-relative scale-shine" >

            <h5 className="fw-bolder">{props.title}</h5>
            <p className="mb-2"> {props.description} </p>
        
            <p className="mb-0"> <strong>Technologies</strong> {props.technologies}</p>


            <div className="row row-cols-auto fs-4 mb-2 mt-2 gx-3 "      > 
            {props.sources.map((source , index) =>{

                return(
                    <a class={"col text-black   " + source.icon}  
                  
                        href={source.link} target="_blank">
                    </a>
                )
                })}
            </div>
           
          
    </div>
     );
}

export default Project;