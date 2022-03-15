import  {ReactComponent as EstrelaCheia} from "assets/img/estrela_cheia.svg";
import  {ReactComponent as EstrelaMetade} from "assets/img/estrela_metade.svg";
import  {ReactComponent as EstrelaVazia} from "assets/img/estrela_vazia.svg";

import "./styles.css";

type Props = {
    avalia: number;
}

type EstrelaProps = {
    preencher: number;
}

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Estrelas({ preencher }: EstrelaProps) {
    if(preencher === 0){
        return <EstrelaVazia />
    } else if (preencher === 0.5) {
        return <EstrelaMetade />
    } else {
        return <EstrelaCheia />
    }
}

function Estrela({avalia} : Props) {

    const num = getFills(avalia);

    return (
        <>
            <div className="dsmovie-stars-container">
                <Estrelas preencher={num[0]} />
                <Estrelas preencher={num[1]} />
                <Estrelas preencher={num[2]} />
                <Estrelas preencher={num[3]} />
                <Estrelas preencher={num[4]} />
            </div>
        </>
    )
}

export default Estrela;