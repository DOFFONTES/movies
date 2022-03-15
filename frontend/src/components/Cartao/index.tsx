import { Link } from "react-router-dom";
import Avaliacao from "../Avaliacao";
import {Filme} from "../../types/filme";

type Props = {
    filme: Filme;
}

function Cartao( {filme} : Props) {

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={filme.imagem} alt={filme.titulo} />
            <div className="dsmovie-card-bottom-container">
                <h3>{filme.titulo}</h3>
                <Avaliacao avaliacao={filme.avaliacao} quant={filme.contador} />
                <Link to={`form/${filme.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default Cartao;