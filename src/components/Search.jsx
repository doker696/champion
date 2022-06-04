import { Autocomplete, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

function Search({ types, onClick, value }) {
  const [fourTypeChips, setFourTypeChips] = useState([]);
  const [valueInput, setValueInput] = useState(null);
  const generateTypes = () => {
    const result = [];

    if (!types.length) {
      return [];
    }

    for (let i = 0; i < 4; i++) {
      result.push(<Button onClick={() => onClick(types[i])} className={styles.btn}>{types[i].name}</Button>);
    }
    return result;
  };

  useEffect( () => {
    setFourTypeChips(generateTypes());
  }, [types]);
  useEffect( () => {
    setValueInput(value);
  }, [value]);

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <Autocomplete
          id="country-select-demo"
          getOptionLabel={(option) => option.name}
          value={valueInput}
          className={styles.searchInput}
          options={types}
          size='small'
          variant='outlined'
          onChange={(_, value) => onClick(value)}
          renderInput={(params) => <TextField {...params} className={styles.searchInput} />}
        ></Autocomplete>
      </div>
      <div className={styles.btns}>
        {fourTypeChips}
      </div>
    </div>
  );
}

Search.propTypes ={
  types: PropTypes.array,
  onClick: PropTypes.func,
  value: { pk: PropTypes.number, name: PropTypes.string },
};

export default Search;
