import React, { useContext } from 'react';
import { GlobalContext } from './utils/global.context';
import '../Style/Footer.css'; 
const Footer = () => {
  const { state } = useContext(GlobalContext);
  const { theme } = state;

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <p>Powered by</p>
        <img src="https://th.bing.com/th/id/OIP.2uikkVU7DgOf0m7QWfVYJQHaBe?w=14421&h=2875&rs=1&pid=ImgDetMain" alt="DH-logo" className="footer-logo" />
      </div>
      <img src="https://th.bing.com/th/id/R.b0aec11c3608136179ae95a32f017bb5?rik=d00v9HUWIB7slQ&pid=ImgRaw&r=0" alt="Odontólogos" className="footer-dentist-img" />
    </footer>
  );
};

export default Footer;
