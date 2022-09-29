import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;

  background: ${(props) => props.theme["gray-700"]};
`;
