import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(''); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/');
        setData(response.data); // Set the actual data, not the promise
      } catch (error) {
        console.error("Error fetching data:", error);
        setData('Error fetching data');
      } finally {
        setLoading(false); // Set loading to false after the request is done
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      <p>This is a demo</p>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <p>{data}</p> 
      )}
    </div>
  );
}

export default App;
