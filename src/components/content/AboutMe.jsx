import { useEffect, useState } from "react";
import MyFace from "../../assets/MyFace.png";

function AboutMe() {

    // Define State for chnage role
    const roles = ["Software Engineer" , "Front-End Enginner" , "Web Developer"];
    const [currentRoleIndex , setCurrentRoleIndex] = useState(1);
    const [currentRole, setCurrentRole] = useState("Software Engineer");
    const [animationTime , setAnimationTime ] = useState(2);


    // Chnage Roles For Type Animation
    useEffect(()=>{

        function ChnagerRole(){
           
            if(currentRoleIndex < roles.length){
                setCurrentRole(roles[currentRoleIndex]);
                setCurrentRoleIndex(currentRoleIndex + 1);
            }else{
                setCurrentRole(roles[0]);
                setCurrentRoleIndex(1);
            }
            
            setAnimationTime(4)
        }
        // Every 3 Secodns change role
        setTimeout(() => {
            ChnagerRole();
        }, animationTime * 1000);
        
    },[currentRoleIndex]);


    
    return ( 
        <main className="container-fluid  ps-0 pe-0 d-flex " >

            {/* Section on the left , name , summary about me , my roles  */}
            <section className="w-50 m-auto ms-3 ps-5 pe-5 " >
                <div >
                    <h1 className="">Hi,It's Ali 
                        <span style={{color:"var(--shinyColor)",textShadow:" 0px 0px 25px var(--shinyColor)"}}> Alahdal  </span>
                    </h1>
                   
                </div>
                <div className="d-flex">
                    <h4 className="me-2">I'm a </h4>
                    <h4 className="typing overflow-hidden"  > {currentRole}  </h4>
    
                </div>
                
                <div className="">
                    <p>
                   Software engineer with strong knowledge in Java and JavaScript, including ReactJS and RESTful APIs. 
                   Experienced in web development through internships, personal and collaborative projects, hackathons. 
                   Strong problem-solving and communication skills.
                    </p>
                </div>

                <div className="row row-cols-auto fs-4 social-media-box gap-3 ms-1  ">

                    <div className="rounded-pill scale-shine">
                        <i class="bi bi-github  "></i>
                    </div>
                  
                   
                    <div className="rounded-pill scale-shine">
                        <i class="bi bi-linkedin"></i>
                    </div>
                    <div className="rounded-pill scale-shine">
                        <a class="bi bi-instagram" target="_blank"></a>
                    </div>
                    
                 </div>
         
            </section>


          

            {/* Image Section */}
            <section className="w-50 h-75 m-auto text-center  ">
                <img className="h-100 scale-shine" src={MyFace} style={{borderRadius:"100%",border:"var(--shinyColor) 6px solid"}}/>
            </section>
        </main> 
    );
}

export default AboutMe;