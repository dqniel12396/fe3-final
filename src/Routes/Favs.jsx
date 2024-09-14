import React, { useState, useEffect, useContext, useMemo } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from '../Components/utils/global.context';
import '../Style/Favs.css'
const Favs = () => {
  const { state } = useContext(GlobalContext);
  const { theme } = state;
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavorites(storedFavs);
  }, []);

  const removeFav = (id) => {
    const updatedFavs = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavs);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  const removeAllFavs = () => {
    localStorage.removeItem('favs');
    setFavorites([]);
  };

  const memoizedFavorites = useMemo(() => favorites, [favorites]);

  return (
    <div className={`favs-page ${theme}`}>
      <h1>Dentists Favs</h1>
      {memoizedFavorites.length > 0 ? (
        <div>
          <button onClick={removeAllFavs} className="remove-all-btn">
            Eliminar Todos los Destacados
          </button>
          <div className="card-grid">
            {memoizedFavorites.map(fav => (
              <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                username={fav.username}
                onRemove={() => removeFav(fav.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <p className="no-favorites">No hay odontólogos en favoritos.</p>
      )}
    </div>
  );
};

export default Favs;
