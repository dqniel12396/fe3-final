import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';

const dentistImage = 'https://plus.unsplash.com/premium_photo-1661768526823-8e7941279818?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Ruta a la imagen del odontólogo

const Card = ({ name, username, id, onRemove }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const isAlreadyFav = storedFavs.some(fav => fav.id === id);
    setIsFavorited(isAlreadyFav);
  }, [id]);

  const addFav = () => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    if (!storedFavs.find(fav => fav.id === id)) {
      storedFavs.push({ name, username, id });
      localStorage.setItem('favs', JSON.stringify(storedFavs));
      setIsFavorited(true);
      alert(`${name} ha sido agregado a favoritos!`);
    }
  };

  return (
    <div className={`card ${theme}`}>
      <Link to={`/dentist/${id}`}>
        <img src={dentistImage} alt="Odontólogo" className="dentist-image" />
      </Link>
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentist/${id}`} className="detail-link">Ver Detalles</Link>
      {!isFavorited ? (
        <button onClick={addFav} className="favButton">Agregar a Favoritos</button>
      ) : onRemove ? (
        <button onClick={onRemove} className="favButton remove">Eliminar de Favoritos</button>
      ) : (
        <p className="favorited">Ya está en favoritos</p> 
      )}
    </div>
  );
};

export default Card;
