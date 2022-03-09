import '../Estrela'
import Estrela from "../Estrela";

import "./styles.css";

function Avaliacao() {

    const avaliacao = 3.5;
    const quant = 13

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{avaliacao > 0 ? avaliacao.toFixed(1) : '-'}</p>
            <Estrela />
            <p className="dsmovie-score-count">{quant} avaliações</p>
        </div>
    );
}

export default Avaliacao;