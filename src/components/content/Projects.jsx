import { Link } from "react-router-dom";
import "../../style/Projects.css"
import Project from "../parts/Project";

function Projects() {
    return (  
        <main  className="container-fluid d-flex justify-content-center mt-5 x" id="projects" >
       
            <div className="row row-cols-2 text-black m-auto gap-3 d-flex justify-content-center pb-5 " >
                
                <Project title={"Library Management System"}
                    description={"Project for managing library books with features for viewing, searching, adding, and removing books."}
                    technologies={"Java, OOP, Data Structure, Algorithms."}
                    sources={[
                        {
                            link : "https://github.com/Ali-Alahdal/Java-Library-Management-System",
                            icon : "bi bi-github"
                        }
                ]} />
                
                <Project title={"Car Algorithms with OOP"}
                    description={"Project used OOP principles (abstraction, inheritance, extension) to simulate car operations, including moving, stopping, and fuel type management."}
                    technologies={"Java, OOP, Data Structure, Algorithms."}
                    sources={[
                        {
                            link : "",
                            icon : "bi bi-github"
                        }
                ]} />
               

                <Project title={"Wholesaling Management Platform"}
                    description={"Supplier-retailer interface with order tracking and product management. Integrated external APIs for backend functionality."}
                    technologies={"ReactJS, Bootstrap, RESTful APIs"}
                    sources={[
                        {
                            link : "https://github.com/Ali-Alahdal/Wholesaling-Management-Platform",
                            icon : "bi bi-github"
                        },
                        {
                            link : "https://wholesalingmanagementplatform.vercel.app/suppliers",
                            icon :"bi bi-globe"

                        }
                ]} />

                <Project title={"Try Your Luck Game"}
                    description={'Project was made during hackthone under "FUNCTIONALLY DYSFUNCTIONAL" title, movable buttons, things gets break, hammer to fix things' }
                    technologies={"ReactJS, Bootstrap, Manipulate the DOM"}
                    sources={[
                        {
                            link : "https://github.com/Ali-Alahdal/Try-Your-Luck-Game",
                            icon : "bi bi-github"
                        },
                        {
                            link : "https://try-your-luck-ruby.vercel.app/",
                            icon :"bi bi-globe"

                        }
                ]} />

                <Project title={"Portfolio "}
                    description={"Portfolio that's showcase my skills, experiences, education. its what you see it now " }
                    technologies={"ReactJS, Bootstrap, Vite"}
                    sources={[
                        {
                            link : "https://github.com/Ali-Alahdal/Portfolio",
                            icon : "bi bi-github"
                        },
                        {
                            link : "/",
                            icon :"bi bi-globe"

                        }
                       
                ]} />
                <Project title={"To Do List  "}
                    description={"Simple web application add, check and delete tasks, it will be saved it you browser." }
                    technologies={"Javascript, CSS ,HTML "}
                    sources={[
                        {
                            link : "https://github.com/Ali-Alahdal/To_Do_List.js",
                            icon : "bi bi-github"
                        },
                        {
                            link : "https://ali-alahdal.github.io/To_Do_List.js/",
                            icon :"bi bi-globe"

                        }
                       
                ]} />

            </div>
          
        </main>
    );
}

export default Projects;