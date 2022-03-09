import { ReactComponent as Flecha } from 'assets/img/flecha.svg';
import './index.css';

function Paginacao() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <Flecha />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <Flecha className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    )
}

export default Paginacao;