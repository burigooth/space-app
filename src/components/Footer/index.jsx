import styled from "styled-components";
import BotaoIcone from "../BotaoIcone";

const FooterEstilizado = styled.footer`
display: flex;
background-color: #04244F;
justify-content: space-between;
align-items: center;
margin-top: 30px;
width: 100%;
padding: 22px;
box-sizing: border-box;
p{
    color: #FFFFFF;
    padding-right: 20px;
}
`
const Icones = styled.div`
display: flex;
`

const Footer = () => {
    return (
        <FooterEstilizado>
            <Icones> 
                <BotaoIcone>
                <img src="/imagens/sociais/facebook.svg" alt="Icone do Facebook" />
            </BotaoIcone>

            <BotaoIcone>
                <img src="/imagens/sociais/instagram.svg" alt="Icone do Instagram" />
            </BotaoIcone>

            <BotaoIcone>
                <img src="/imagens/sociais/twitter.svg" alt="Icone do Twitter" />
            </BotaoIcone>
            </Icones>
        <p>Desenvolvido por Mateus</p>
        </FooterEstilizado>
    )
}

export default Footer;