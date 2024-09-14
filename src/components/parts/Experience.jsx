import WhiteImage from "../../assets/white.png";
function Experience(props) {
    return ( 
        <div className="experience-box col rounded-2 text-center mb-5 scale-shine pb-3 ">

            {/* Image */}
            <div className=' justify-content-center p-3'>
                <img className='w-75 h-75 bg-white rounded-pill mb-3 '  src={props.image ? props.image : WhiteImage} />
                <h5>{props.position}</h5>
                <p> {props.company}</p>
            </div>

            
            <div className="text-start">
                <p>{props.date}</p>
                <ul className=' notes'>
                    {props.notes.map((note , index) =>{
                        return <li className="mb-3" key={index}>{note}</li>
                    })}
                </ul>
            </div>

        </div>
     );
}

export default Experience;