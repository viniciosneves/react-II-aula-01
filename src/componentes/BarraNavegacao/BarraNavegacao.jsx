import styled from "styled-components"

const NavEstilizado = styled.nav`
    padding: 18px 80px;
`

const UlEstilizado = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 55px;
    align-items: center;
    li {
        a {
            text-decoration: none;
            &:visited {
                color: #000000;
            }
        }

    }
`

const Separador = styled.li`
    flex-grow: 1;
`

const LinkComIcone = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
`

const BarraNavegacao = () => {
    return (<NavEstilizado>
        <UlEstilizado>
            <li>
                <img src="/logo.png" alt="" />
            </li>
            <li>
                <a href="#">
                    CATEGORIAS
                </a>
            </li>
            <Separador />
            <li>
                <LinkComIcone href="#">
                    <img src="/icones/usuario.png" alt="" /> Login
                </LinkComIcone>
            </li>
        </UlEstilizado>
    </NavEstilizado>)
}

export default BarraNavegacao