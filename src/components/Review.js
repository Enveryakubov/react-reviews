import React, {useState} from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';


const Review = ({rev}) => {
    const [num, setNum] = useState(0)
    const target = rev[num]
    
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
    const increment = () => {
        setNum((num + 1) % rev.length)
    }
    const decrement = () => {
        setNum(Math.abs(rev.length + num -1) % rev.length)
    }
    const random = () => {
        setNum(Math.floor(Math.random()*rev.length))
    }

    return (
        <div className="review">                    
            <div className="test">
                <div className="card">
                    <div className="circle">
                    </div>
                    <div className="image-cropper">
                        <img src={target.image} alt="problem?" className="profile-pic"/>
                    </div>
                </div>
            </div>
            <h4 style={{letterSpacing:"0.4rem", lineHeight:"1.5rem"}}>{toTitleCase(target.name)}</h4>
            <p style={{margin:"0px", letterSpacing:"0.2rem", color:"rgb(93, 216, 210)" }}>{target.job.toUpperCase()}</p>
            <p style={{textAlign:"center"}}>{target.text}</p>
            <div style={{width:"100px"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <button onClick={decrement}>
                       <FaChevronLeft/>
                    </button>
                    <button onClick={increment}>
                        <FaChevronRight/>
                    </button>
                </div>
                <button  onClick={random} className="surprise">Surprise Me</button>
            </div>
        </div>
    )
}

export default Review
