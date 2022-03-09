import  {ReactComponent as EstrelaCheia} from "assets/img/estrela_cheia.svg";
import  {ReactComponent as EstrelaMetade} from "assets/img/estrela_metade.svg";
import  {ReactComponent as EstrelaVazia} from "assets/img/estrela_vazia.svg";

import "./styles.css";

function Estrela() {

    return (
        <div className="dsmovie-stars-container">
            <EstrelaCheia />
            <EstrelaCheia />
            <EstrelaCheia />
            <EstrelaMetade />
            <EstrelaVazia />
        </div>
    )
}

export default Estrela;