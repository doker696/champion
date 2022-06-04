import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import Search from '../components/Search';
import { useEvents } from '../hooks';
import styles from './style.module.css';
import { getSportInfo } from '../api';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Analysis() {
  const [sport, setSport] = useState(null);
  const [chartData, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { types, events, searchValue, handleChange, isEventLoading } =
    useEvents();

  useEffect(() => {
    if (!searchValue) return;
    setData(null);
    setIsLoading(true);
    getSportInfo(searchValue.pk)
        .then(({ data }) => {
          setSport(data);
        })
        .finally(() => setIsLoading(false));
  }, [searchValue]);

  useEffect(() => {
    if (sport) {
      setData(
          [
            { name: '2022', value: sport.count_events_in_year[0] },
            { name: '2021', value: sport.count_events_in_year[1] },
            { name: '2020', value: sport.count_events_in_year[2] },
            { name: '2019', value: sport.count_events_in_year[3] },
            { name: '2018', value: sport.count_events_in_year[4] },
          ].reverse(),
      );
    }
  }, [sport]);

  return (
    <>
      {types.length ? (
        <Search types={types} onClick={handleChange} value={searchValue} />
      ) : (
        <div className={styles.spin}>
          <CircularProgress />
        </div>
      )}
      {searchValue ? (
        <div>
          <div className={styles.eventTitle}>
            {searchValue.name.toUpperCase()}
          </div>

          <div className={styles.divider} />
          <div className={styles.analPaper}>
            <div className={styles.analTitle}>Статистика вида спорта</div>
            <div className={styles.analTitle}>“{searchValue.name}”</div>
            {isLoading ? (
              <div className={styles.spin}>
                <CircularProgress />
              </div>
            ) : chartData ? (
              <div>
                <div className={styles.analSubTitle}>
                  Количество событий всего: {sport.count_events}
                </div>
                <div className={styles.analSubTitle}>
                  Количество событий за текущий год:{' '}
                  {sport.count_events_cur_year}
                </div>
                <div
                  style={{ width: '700px', height: '500px', margin: 'auto' }}
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                      width={500}
                      height={150}
                      data={chartData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis
                        label={{
                          value: 'Год',
                          offset: -2,
                          position: 'insideBottom',
                        }}
                        name='Количество событий'
                        dataKey='name'
                      />
                      <YAxis
                        label={{
                          value: 'Количество событий',
                          angle: -90,
                          position: 'insideLeft',
                        }}
                      />
                      <Tooltip />
                      <Legend />
                      <Bar
                        offset='100px'
                        name='Количество событий'
                        dataKey='value'
                        fill='#8884d8'
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ) : (
              <div className={styles.analTitle}>Нет информации</div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Analysis;
