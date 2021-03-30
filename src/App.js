import Heading from "./components/Heading"
import Review from "./components/Review"
import {useState, useEffect} from "react"
import data from "./data"

function App() {
  const [reviews, setReviews] = useState([])
 

  
  useEffect(() => {
    setReviews(data)
  }, [])

  return (
    <div>
      <Heading/>
      {reviews.length === 0 ? <h2>t</h2>: <Review rev={reviews}/>}
    </div>
  );
}

export default App;
