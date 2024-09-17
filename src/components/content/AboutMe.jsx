import { useEffect, useState } from "react";
import MyFace from "../../assets/MyFace.jpeg";
import Education from "./Education";
import Experiences from "./Experiences";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Skills from "./Skills";

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
        <main className="container-fluid  ps-0 pe-0 " >

            <div className="container d-flex mt-3 mb-5" id="aboutMe">
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
                            <a class="bi bi-github " target="_blank" href="https://github.com/Ali-Alahdal"></a>
                        </div>
                    
                    
                        <div className="rounded-pill scale-shine">
                            <a class="bi bi-linkedin" target="_blank" href="https://www.linkedin.com/in/ali-alahdal/"></a>
                        </div>
                        <div className="rounded-pill scale-shine">
                            <a class="bi bi-instagram" target="_blank" href="https://www.instagram.com/ali_m_alahdal/"></a>
                        </div>
                        
                    </div>

                    <div className="mt-4">
                        <a href="#contactMe" className="border-0 scale-shine  text-black me-4  rounded-pill hire-me p-2 ps-3 pe-3 text-decoration-none" >Hire Me</a>
                        <a href="#contactMe" className="border-0  scale-shine  rounded-pill contact-me p-2 ps-3 pe-3 text-decoration-none">Contact Me</a>
                    </div>
            
                </section>
                {/* Image Section */}
                <section className="w-50 h-50 m-auto  d-flex mt-5  ">
                    <img className="h-75 w-75 scale-shine m-auto " src={MyFace} style={{borderRadius:"100%",border:"var(--shinyColor) 6px solid"}}/>
                </section>
            </div>
          


            <div className="w-100 text-center mt-5">
                <h1>My Skills</h1>
            </div>
            <Skills />

            

            <div className="w-100 text-center mt-5">
                <h1>Projects</h1>
            </div>

            <Projects />
            <div className="w-100 text-center mt-5">
                <h1>Education</h1>
            </div>
          
            <Education />
          
            
            <div className="w-100 text-center mt-5">
                <h1>Experiences</h1>
            </div>
            <Experiences />

           

            <div className="w-100 text-center mt-5 mb-5">
                <h1 className="mb-3">Reach Me</h1>
                <p className="email  ">
                    Email: ali.m.alahdal2@gmail.com
                </p>
            </div>
            <ContactMe /> 


            <a href="#aboutMe" className=" text-white text-bolder scale-shine position-fixed bottom-0 end-0 me-5 mb-5 toTop rounded-pill pt-1 pb-1 p-2 fs-5 bi bi-arrow-up">
          

            </a>

        </main> 
    );
}

export default AboutMe;