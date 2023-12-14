import styled from "styled-components"
import CapaLivro from "../CapaLivro/CapaLivro"
import CardLivro from "../CardLivro/CardLivro"

const ContainerLivros = styled.section`
  background: #EBECEE;
  padding: 48px 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 44px;
`

const UlEstilizada = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 32px;
`

const LivrosDestaque = () => {
    return (<ContainerLivros>
        <UlEstilizada>
            <li>
                <CapaLivro src="/livros/js.png" />
            </li>
            <li>
                <CapaLivro src="/livros/kafka.png"  $selecionado={true}/>
            </li>
            <li>
                <CapaLivro src="/livros/lideranca.png" />
            </li>
        </UlEstilizada>
        <CardLivro />
    </ContainerLivros>)
}

export default LivrosDestaque