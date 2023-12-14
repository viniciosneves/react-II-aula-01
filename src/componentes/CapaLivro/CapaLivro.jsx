import styled from "styled-components";

const CapaLivro = styled.img`
    width: ${props => props.$selecionado ? '280px' : '192px'};
`

export default CapaLivro