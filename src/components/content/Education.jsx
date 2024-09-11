import "../../style/Education.css"
function Education() {
    return ( 
        <main  className="container-fluid     d-flex justify-content-center  " >

            <section className=" education-container d-flex justify-content-center align-self-center   ">

                <div className="box  text-start w-auto  " >
                    <h4>High School Degree</h4>
                    <h6>Graduation Year : 2020-2021</h6>
                    <p className="m-0"> Major : Natural Sciences </p>
                    <p className="m-0">GPA : 93.25 / 100</p>
                </div>
                <div className="box  text-start w-auto  " >
                    <h4>Bachelor's Degree</h4>
                    <h6>Expected Graduation : 2026</h6>
                    <p className="m-0"> Major : Computer Technology and Information Systems </p>
                    <p>GPA : 3.22 / 4.00</p>
                </div>
                <div className="box   text-start w-auto   " >
                    <h4>Master Degree</h4>
                    <h6>Expected Graduation : ????</h6>
                    <p>Major : ?? ??</p>
                    <p>GPA : ?? / ??</p>
                </div>

            </section>
          
        </main>
     );
}

export default Education;