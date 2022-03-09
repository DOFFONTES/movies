import Paginacao from "components/Paginacao";
import Cartao from "../../components/Cartao";

function Lista() {
    return (
        <>
            <Paginacao />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Cartao />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Cartao />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Cartao />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Cartao />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Cartao />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Cartao />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lista;