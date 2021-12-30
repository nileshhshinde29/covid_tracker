import logo from './logo.svg';
import './App.css';

import Charts from "./charts"
import React from 'react';
import axios from "axios"


function App() {

const [data , setData]=React.useState([])

  React.useEffect (() =>{
    const FetchData = async () => {
    return  await axios.get("https://api.covid19api.com/summary")
   .then((response) => setData(response.data.Countries));}

   FetchData()
},[])


  return (
    <div className="App">
      <Charts   data={data}/>
     
    </div>
  );
}

export default App;
