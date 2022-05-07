import './App.css';
import Filter from './components/Filter';
import SpaceXInfo from './components/SpaceXInfo';
import React, { useState, useEffect, createContext } from 'react';
export const AppContext = createContext([]);

function App() {
  const [data, setData] = useState([]);
  const [spaceDetails, setSpaceDetails] = useState({
    launch_success: '',
    land_success: '',
    launch_year: ''
  })
  let { launch_success, land_success, launch_year } = spaceDetails

  let api = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`;

  useEffect(() => {
    async function fetchData() {
      let result = await fetch(api);
      setData(await result.json());
    }

    fetchData()
  }, [spaceDetails, api])

  return (
    <AppContext.Provider value={{ data, spaceDetails, setSpaceDetails }}>
      <div>
        <h1 style={{ textAlign: 'start' }}>SpaceX Launch Programs</h1>
        <div className="App">
          <Filter />
          <SpaceXInfo data={data} />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;