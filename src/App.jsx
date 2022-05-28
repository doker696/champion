import { useState } from 'react';
import { Tabs, Tab, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <Tab value="one" label="Главная" to='/' component={Link} />
          <Tab value="two" label="События" to='/events' component={Link} />
          <Tab value="three" label="Анализ" to='/analysis' component={Link}/>
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
