import '../../style/Experiences.css';
import Experience from '../parts/Experience';
import CopmanyImage from "../../assets/company.png";
function Experiences() {
    return ( 
        <main className='container-fluid  mt-5 p-5' name="experiences" id='experiences' >
            <div className=" row row-cols-auto justify-content-center align-items-center m gap-5 ">
             
                <Experience position="Intern Web Developer"
                    company="Technohacks"
                    notes={[
                        "Developed 10+ web templates with HTML, JavaScript, and CSS/Bootstrap,",
                        'Adapted to dynamic project needs, delivering solutions 20% faster than initial timelines.',
                        'I created algorithms to enhance the security by adding validation to the templates. '
                    ]}
                    image={CopmanyImage}
                    date={"Jan 2024 - Feb 2024 "}
                />
               
               
            </div>
        </main>
      );
}

export default Experiences;