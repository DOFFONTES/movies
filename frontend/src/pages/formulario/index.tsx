import {useParams} from "react-router-dom";
import CartaoFormulario from "components/CartaoFormulario";

function Formulario() {

    const params = useParams();

    return (
        <CartaoFormulario filmeId={`${params.filmeId}`} />
    );
}

export default Formulario;