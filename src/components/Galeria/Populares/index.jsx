import styled from "styled-components";
import Titulo from "../../Titulo";

import populares from "./fotos-populares.json";

const Coluna = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Images = styled.img`
   max-width: 212px;
   border-radius: 20px;
   transition: 0.5s;
   &:hover{
         transform: scale(1.1);
         
   }
`

const Botao = styled.button`
    background-color: transparent;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    padding: 14px 29px;
    color: #FFF;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    margin-top: 16px;
`

const Populares = () => {
    return (
        <Coluna>
            <Titulo $alinhamento= "center">Populares</Titulo>
            {populares.map(foto => <Images key={foto.id} src={foto.path} alt={foto.alt}/>)}
            <Botao>Ver mais</Botao>
        </Coluna>
    )
}

export default Populares;