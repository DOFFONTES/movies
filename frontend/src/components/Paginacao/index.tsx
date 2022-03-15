import { ReactComponent as Flecha } from 'assets/img/flecha.svg';
import './index.css';
import {FilmePage} from "../../types/filme";

type Props = {
    pagina : FilmePage,
    muda: Function
}

function Paginacao( {pagina, muda} : Props) {

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={pagina.first} onClick={()=> muda(pagina.number - 1)} >
                    <Flecha />
                </button>
                <p>{`${pagina.number + 1} de ${pagina.totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={pagina.last} onClick={()=> muda(pagina.number + 1)}>
                    <Flecha className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    )
}

export default Paginacao;