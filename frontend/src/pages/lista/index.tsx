import Paginacao from "components/Paginacao";
import Cartao from "../../components/Cartao";
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {useEffect, useState} from "react";
import {Filme, FilmePage} from "../../types/filme";

function Lista() {

    const filme = {
        id: 1,
        imagem: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        titulo: "The Witcher",
        contador: 2,
        avaliacao: 4.5
    };

    const [numeroPagina, setNumeroPagina] = useState(0);
    
    const [pagina, setPagina] = useState<FilmePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() =>{
        axios.get(`${BASE_URL}/filmes?size=12&page=${numeroPagina}&sort=id`).then(response => {

            const dado = response.data as FilmePage;
            setPagina(dado);

        });
    },[numeroPagina]);

    const mudaPagina = (novoNumero: number) =>{
       setNumeroPagina(novoNumero);
    }

    return (
        <>
            <Paginacao pagina={pagina} muda={mudaPagina}/>

            <div className="container">
                <div className="row">
                    {pagina.content.map(x => (
                        <div key={x.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <Cartao filme={x}/>
                        </div>
                    ))};
                </div>
            </div>
        </>
    );
}

export default Lista;