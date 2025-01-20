import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(''); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Function to fetch data
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
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="App">
      <p>This is a demo</p>
      {loading ? (
        <p>Loading...</p> // Show a loading message while the request is in progress
      ) : (
        <p>{data}</p> // Show the actual fetched data
      )}
    </div>
  );
}

export default App;
