import { useEffect, useState } from 'react';
import { Tabs, Tab, Grid, Container, listItemSecondaryActionClasses } from '@mui/material';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import { useLocation } from 'react-router-dom';


function App() {
  const [value, setValue] = useState('main');
  const location = useLocation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (location.pathname.includes('main')) setValue('main');
    if (location.pathname.includes('events')) setValue('events');
    if (location.pathname.includes('analysis')) setValue('anal');
  }, [location.pathname]);


  return (<>
    <nav className='nav'>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab value="main" label="Главная" to='/' component={Link} />
          <Tab value="events" label="События" to='/events' component={Link} />
          <Tab value="anal" label="Анализ" to='/analysis' component={Link}/>
        </Tabs>
      </Grid>
    </nav>
    <main>
      <Container>
        <Outlet/>
      </Container>
    </main>
  </>
  );
}

export default App;
