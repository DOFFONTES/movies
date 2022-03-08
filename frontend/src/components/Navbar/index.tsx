import { ReactComponent as IconeGithub} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
          <nav className='container'>
            <div className='movie-nav-content'>
              <h1>Filmes</h1>
              <a href='https://github.com/DOFFONTES'></a>
              <div className='movie-link'>
               <IconeGithub />
               <p className='movie-link-texto'>/David Fontes</p>     
              </div>
              
            </div>
          </nav>
        </header>
      );  
}

export default Navbar;