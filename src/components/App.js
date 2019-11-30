import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { requestJSON } from '../redux/actions';

import NavigationButtons from './NavigationButtons';
import EditCard from './EditCard';

import '../assets/App.css';

function App() {
  const data = useSelector(state => state.editJSON.data);
  const dataIndex = useSelector(state => state.editJSON.index);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestJSON());
  }, []);

  return (
    <div className="App">
      <EditCard />
      {/* {data && data.map((item, index) => (
        <p key={index}>{index}</p>
      ))} */}
      { data && (
        <p>Index: {dataIndex}</p>
      )}
      <NavigationButtons />
    </div>
  );
}

export default App;
