import './Home.css';
import Seta from '../SetaComponent/Seta';

import { Link, } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
      <div className='subcontainer-home'>
        <img alt='logo coração de mãe' className='logo-home formataimg-home' src='./assets/logo.jpeg' />
        <h1>APP DE PRECIFICAÇÃO DA BOLARIA CORAÇÃO DE MÃE</h1>
        <Link to="/product">
          <Seta />
        </Link>
      </div>
    </div>
  );
}

export default Home;
