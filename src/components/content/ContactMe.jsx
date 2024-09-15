import "../../style/ContactMe.css"
function ContactMe() {
    return ( 
        <div className="container-fluid" id="contactMe">

              <div className=" d-flex text-center align-items-center fs-1 mb-5 social-media-box">
             
                <div className="rounded-pill scale-shine m-auto ">
                    <a class="bi bi-github " target="_blank" href="https://github.com/Ali-Alahdal"></a>
                </div>


                <div className="rounded-pill scale-shine m-auto">
                    <a class="bi bi-linkedin" target="_blank" href="https://www.linkedin.com/in/ali-alahdal/"></a>
                </div>

                <div className="rounded-pill scale-shine m-auto" >
                    <a class="bi bi-instagram" target="_blank" href="https://www.instagram.com/ali_m_alahdal/"></a>
                </div>

             </div>

          
        </div>
      
    );
}

export default ContactMe;