import { useEffect, useState } from 'react';
import { getTypes } from '../api';
import Search from '../components/Search';

function Home() {
  return (
    <>
      <div>
        <div className='text--primary'>Champion - web-приложение для мониторинга и анализа результатов спортивных событий</div>
        <div className='text--secondary'>для просмотра результатов воспользуйтесь вкладкой “События”</div>
        <div className='text--secondary'>для просмотра статистики и анализа по видам спорта воспользуйтесь вкладкой “Анализ”</div>
      </div>
      {/* <div>{types.length && types.map((el) => <>{el.name}</>)}</div> */}
    </>
  );
}

export default Home;
