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
gap: 20px;
align-items: center;
a{
   
    img{
        width: 40px;
    }
};
`

const Footer = () => {
    return (
        <FooterEstilizado>
            <Icones> 
                <a href="https://github.com/burigooth" target="_blank">
                <img src="/imagens/sociais/github-mark-white.svg" alt="Icone do Github" />
            </a>
            
            </Icones>
        <p>Desenvolvido por Mateus & Alura </p>
        </FooterEstilizado>
    )
}

export default Footer;