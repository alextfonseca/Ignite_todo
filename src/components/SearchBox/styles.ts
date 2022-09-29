import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  position: relative;
  top: -30px;

  input {
    background: ${(props) => props.theme["gray-500"]};
    border: 1px solid ${(props) => props.theme["gray-700"]};
    padding: 1rem;
    border-radius: 8px;
    color: #fff;

    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: ${(props) => props.theme["blue-100"]};
    padding: 1rem;
    border-radius: 8px;

    width: 90px;

    border: none;

    color: #fff;
    font-weight: bold;
    font-size: 0.875rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["blue-200"]};
    }
  }
`;
