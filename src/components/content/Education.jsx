import "../../style/Education.css"
function Education() {
    return ( 
        <main  className="container-fluid     d-flex justify-content-center  " >

            <section className=" education-container d-flex justify-content-center align-self-center   ">

                <div className="box text-start w-auto  " >
                    <h4>
                        <span className="text-shine">  High School </span> 
                    
                       Degree
                    </h4>
                    <p className="m-0"> Major : Natural Sciences </p>
                    <p>Graduation Year : 2020-2021</p>
                   
                    <p className="m-0">GPA : 93.25 / 100</p>
                </div>
                <div className="box  text-start w-auto  " >
                    <h4>
                        <span className="text-shine">Bachelor's </span>  Degree
                    </h4>
                    <p className=""> Major : Computer Technology and Information Systems </p>
                    <p>Expected Graduation : 2025-2026</p>
                    
                    <p>GPA : 3.22 / 4.00</p>
                </div>
                <div className="box   text-start w-auto   " >
                    <h4>
                        <span className="text-shine">Master </span> Degree

                    </h4>
                    <p>Major : ?? ??</p>
                    <p>Expected Graduation : ????</p>
                   
                    <p>GPA : ?? / ??</p>
                </div>

            </section>
          
        </main>
     );
}

export default Education;