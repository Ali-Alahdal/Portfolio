import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <header className='container d-flex justify-content-between bg-black position-sticky '>

        {/* My Name with type animation */}
        <div className='w-50 text-center ' >

            <h2 className='my-name self-align-center  m-auto pt-3 ' > Ali
                <span style={{color:"var(--shinyColor)"}}> Alahdal  </span>
            </h2>  
        </div>

        <nav className='w-50 d-flex text-center  '>

            {/* Menu  */}
            <ul className='list-unstyled d-flex m-auto self-align-middle align-items-middle items-ailgn-middle  '>

                {/* Items */}
                <li  className='me-3 ' > 
                    <a href={"#aboutMe"}  className="li-hover pb-1">About Me </a>
                </li>
                
                <li className='me-3'>
                    <a href={"#skills"}  className="li-hover pb-1"> Skills </a>
                </li>
                <li className='me-3 '>
                    <a href={"#projects"}  className="li-hover pb-1">Projects </a>
                </li>

                <li className='me-3 '>
                    <a href={"#education"}  className="li-hover pb-1">Education</a>
                </li>

                <li className='me-3 '>
                    <a href={"#experiences"}  className="li-hover pb-1">Experiences </a>
                </li>
               
                <li className='me-3'>
                    <a href={"#contactMe"}  className="li-hover pb-1">Contact Me </a>
                </li>
            </ul>
            
        </nav>

        </header>
     );
}

export default Header;