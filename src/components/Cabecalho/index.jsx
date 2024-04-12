import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header` // Criando um COMPONENTE estilizado pelo styled component com a tag header
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png"/>
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho;