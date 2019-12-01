import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import NavigationButtons from './NavigationButtons';
import EditCard from './EditCard';

import '../assets/App.css';

function App() {
  const data = useSelector(state => state.editJSON.data);
  const dataIndex = useSelector(state => state.editJSON.index);
  const [dataItem, setDataItem] = useState();

  useEffect(() => {
    setDataItem(data[dataIndex]);
  }, [dataIndex, data]);

  return (
    <div className="App">
      {dataItem && (<EditCard data={dataItem} />)}
      { data && (
        <p>Index: {dataIndex}</p>
      )}
      <NavigationButtons />
    </div>
  );
}

export default App;
