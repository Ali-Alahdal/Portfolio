import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <header className='container d-flex justify-content-between pt-2 '>

        {/* My Name with type animation */}
        <div className='w-50 text-center m-auto   ' >

            <h2 className='my-name self-align-center  m-auto pt-3 ' > Ali
                <span style={{color:"var(--shinyColor)"}}> Alahdal  </span>
            </h2>  
        </div>

        <nav className='w-50 d-flex  text-center  '>

            {/* Menu  */}
            <ul className='list-unstyled d-flex m-auto self-align-middle align-items-middle items-ailgn-middle  '>

                {/* Items */}
                <li  className='me-3 ' > 
                    <NavLink to={'/'} className="li-hover pb-1">About Me </NavLink>
                </li>

                <li className='me-3 '>
                    <NavLink to={'/education'} className="li-hover pb-1">Education </NavLink>
                </li>

                <li className='me-3 '>
                    <NavLink to={'/projects'} className="li-hover pb-1">Projects </NavLink>
                </li>

                <li className='me-3 '>
                    <NavLink to={'/experiences'} className="li-hover pb-1">Experiences </NavLink>
                </li>

                <li className='me-3'>
                    <NavLink to={'/contact-me'} className="li-hover pb-1">Contact Me </NavLink>
                </li>
            </ul>
            
        </nav>

        </header>
     );
}

export default Header;