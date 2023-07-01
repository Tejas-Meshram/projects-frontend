import React, { useState } from 'react';
import './App.css';
import reviews from './data';
import { FcNext, FcPrevious} from 'react-icons/fc'

function App() {

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = reviews[index];


  const checknumber = (number) => {
    if(number < 0){
      return reviews.length - 1;
    }
    if(number > reviews.length - 1){
      return 0;
    }
    return number;
  }

  const handlePrevious = () => {
    let newNumber = index - 1;
    setIndex(checknumber(newNumber));
  }

  const handleNext = () => {
    let newNumber = index + 1;
    setIndex(checknumber(newNumber));
  }

  const handleRandom = () => {
    let random = Math.floor(Math.random() * reviews.length)
    if(random === index){
      random = index + 1;
    }
    setIndex(checknumber(random));
  }


  return (
    <main>
      <section>
        <div>
          <img src={image} alt={name} />
          <div>
            <h2>{name}</h2>
            <h3>{job}</h3>
          </div>
          <p>
            {text}
          </p>
          <div className="btn">
            <button onClick={()=>handlePrevious()}><FcPrevious/></button>
            <button onClick={()=>handleNext()}><FcNext/></button>
          </div>
          <button onClick={()=>handleRandom()}>
            Surprise Me
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
