import React, { useContext } from 'react';
import Form from '../Components/Form';
import { GlobalContext } from '../Components/utils/global.context';
import '../Style/Contact.css';

const Contact = () => {
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <div className={`contact ${theme}`}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
};

export default Contact;
