import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';
import '../Style/Detail.css'

const Detail = () => {
  const { id } = useParams(); 
  const { state } = useContext(GlobalContext);
  const { theme } = state; 
  const [dentist, setDentist] = useState(null);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error('Error fetching dentist detail:', error));
  }, [id]);


  if (!dentist) return <p>Loading...</p>;

  return (
    <main className={`detail ${theme}`}>
      <h1>Detail of Dentist {dentist.id}</h1>
      <div className="detail-container">
        <p><strong>Nombre:</strong> {dentist.name}</p>
        <p><strong>Email:</strong> {dentist.email}</p>
        <p><strong>Celular:</strong> {dentist.phone}</p>
        <p><strong>Pagina web:</strong> <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
      </div>
    </main>
  );
}

export default Detail;
