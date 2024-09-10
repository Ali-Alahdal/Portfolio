import { useEffect, useState } from "react";
import MyFace from "../../assets/MyFace.png";

function AboutMe() {
    const roles = ["Software Engineer" , "Web Developer" , "React Developer"];
    const [currentRoleIndex , setCurrentRoleIndex] = useState(1);
    const [currentRole, setCurrentRole] = useState("Software Engineer");
    const [animationTime , setAnimationTime ] = useState(1.5);

    useEffect(()=>{

        
        function ChnagerRole(){
            if(currentRole === "Software Engineer"){
                setAnimationTime(1.5);
            }
             if(animationTime === 1.5){
                setAnimationTime(3);
            }


            if(currentRoleIndex < roles.length){
                setCurrentRole(roles[currentRoleIndex]);
                setCurrentRoleIndex(currentRoleIndex + 1);
            }else{
                setCurrentRole(roles[0]);
                setCurrentRoleIndex(0);
            }
           
        }
        setTimeout(() => {
            ChnagerRole();
        }, animationTime * 1000);

        console.log(currentRole);
        
    },[currentRoleIndex])
    return ( 
        <main className="container-fluid  ps-0 pe-0 d-flex " style={{height:"500px"}}>
            <div className="w-50 m-auto ms-3 ps-5 pe-5 " >
                <div >
                    <h1>Hi,It's Ali 
                        <span style={{color:"var(--shinyColor)"}}> Alahdal  </span>
                    </h1>
                   
                </div>
                <div className="d-flex">
                    <h4 className="me-2">I'm a </h4>
                    <h4 className="typing overflow-hidden " > {currentRole}  </h4>
    
                </div>
                
                <div className="">
                    <p>
                   Software engineer with strong knowledge in Java and JavaScript, including ReactJS and RESTful APIs. 
                   Experienced in web development through internships, personal and collaborative projects, hackathons. 
                   Strong problem-solving and communication skills.
                    </p>
                </div>
         
            </div>

            {/* Image Section */}
            <div className="w-50 h-75 m-auto text-center ">
                <img className="h-100 " src={MyFace} style={{borderRadius:"100%",border:"var(--shinyColor) 6px solid"}}/>
            </div>
        </main> 
    );
}

export default AboutMe;