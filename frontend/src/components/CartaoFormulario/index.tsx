import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {BASE_URL} from "../../utils/requests";
import axios, {AxiosRequestConfig} from "axios";
import {Filme} from "../../types/filme";

import "./index.css";
import {validateEmail} from "../../utils/valida";

type Props = {
    filmeId : string;
}

function CartaoFormulario( { filmeId } : Props) {

    const navegacao = useNavigate();

    const [filme, setFilme] = useState<Filme>();

    useEffect(() =>{
        axios.get(`${BASE_URL}/filmes/${filmeId}`).then(response => {
            setFilme(response.data)
        })
    },[filmeId]);

    const enviaAvaliacao = (evento:  React.FormEvent<HTMLFormElement>) => {

        evento.preventDefault();

        const email = (evento.target as any).email.value;
        const avaliacao = (evento.target as any).score.value;

        if(!validateEmail(email)){
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/avaliacoes',
            data: {
                email: email,
                filmeId: filmeId,
                valor: avaliacao
            }
        }

        axios(config).then(response => {
            navegacao("/");
        });
    }

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={filme?.imagem} alt={filme?.titulo} />
            <div className="dsmovie-card-bottom-container">
                <h3>{filme?.titulo}</h3>
                <form className="dsmovie-form" onSubmit={enviaAvaliacao}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to='/'>
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default CartaoFormulario;