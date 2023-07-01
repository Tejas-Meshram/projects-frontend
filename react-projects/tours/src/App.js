import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {

    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  }

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(()=> {
    fetchTours();
  },[])

  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    );
  }

  if(tours.length === 0){
    return (
      <main>
      <h1>No tours left</h1>
      <button className='btn-delete' onClick={() => fetchTours()}>
        Refresh
      </button>
    </main>
    );
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <Tours tours={tours} removeTours={removeTours}/>
    </main>
  );

}

export default App;
