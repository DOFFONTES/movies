import '../Estrela'
import Estrela from "../Estrela";

import "./styles.css";
import {useParams} from "react-router-dom";

type Props = {
    avaliacao : number,
    quant : number
}

function Avaliacao( {avaliacao, quant} : Props) {

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{avaliacao > 0 ? avaliacao.toFixed(1) : '-'}</p>
            <Estrela avalia={avaliacao}/>
            <p className="dsmovie-score-count">{quant} avaliações</p>
        </div>
    );
}

export default Avaliacao;