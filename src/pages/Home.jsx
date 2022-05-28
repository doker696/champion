import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { getTypes } from '../api';


function Home() {
  const [types, setTypes] = useState([]);

  useEffect( () => {
    getTypes().then( ({data}) => {
      setTypes(data);
    });
  }, []);
  return (<>
    <div className='search'>
      <TextField className='searchInput' size='small' variant='outlined'></TextField>
      <Button variant='contained' style={{backgroundColor: '#B7BAFF'}}>Поиск</Button>
    </div>
    {/* <div>{types.length && types.map((el) => <>{el.name}</>)}</div> */}
  </>
  );
}

export default Home;
