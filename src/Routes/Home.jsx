import React, { useContext, useMemo } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from '../Components/utils/global.context';
import '../Style/Home.css'
const Home = () => {
  const { state } = useContext(GlobalContext);
  const { theme, dentists } = state;

  const memoizedDentists = useMemo(() => dentists, [dentists]);

  return (
    <main className={`home ${theme}`}>
      <h1>Our Dentists</h1>
      <div className="card-grid">
        {memoizedDentists.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
