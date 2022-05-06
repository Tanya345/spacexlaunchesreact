import './App.css';
import Filter from './components/Filter';
import SpaceXInfo from './components/SpaceXInfo';
import React, { useState, useEffect, createContext } from 'react';
export const AppContext = createContext([]);

function App() {
  const [firstRender, setFirstRender] = useState(true)
  const [data, setData] = useState([]);
  const [spaceDetails, setSpaceDetails] = useState({
    launch_success: '',
    land_success: '',
    launch_year: ''
  })
  let [api, setApi] = useState('https://api.spaceXdata.com/v3/launches?limit=100');
  useEffect(() => {
    async function fetchData() {
      if (firstRender) {
        setFirstRender(false)
        let result = await fetch(api);
        setData(await result.json());
      }
      else {
        if (launch_success) {
          if (!api.includes('launch_success')) {
            setApi(prevState => prevState.concat(`&launch_success=${launch_success}`));
          }
        }
        if (land_success) {
          if (!api.includes('land_success')) {
            setApi(prevState => prevState.concat(`&land_success=${land_success}`));
          }
          
          // console.log(api);

        }
        if (launch_year) {
          if (!api.includes('launch_year')) {
            setApi(prevState => prevState.concat(`&launch_year=${launch_year}`));
          }

        }
      }
    }
    fetchData()
  }, [spaceDetails])

  useEffect(() => {
    async function fetchData() {
      if (!firstRender) {
        let result = await fetch(api);
        setData(await result.json());
      }
    }
    fetchData()
  }, [api])


  let { launch_success, land_success, launch_year } = spaceDetails
  
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