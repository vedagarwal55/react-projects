import logo from './logo.svg';
import './App.css';
import Accordian from "./Components/Accordian/index"
import RandomColors from './Components/RandomColors/index';
import StarRating from './Components/StarRating/index';
function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColors/> */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
