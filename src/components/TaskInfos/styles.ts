import styled from "styled-components";

export const Infos = styled.div`
  margin: 65px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 24px;

  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 0.875rem;

    color: ${(props) => props.theme["blue-100"]};

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      color: #fff;
      background: ${(props) => props.theme["gray-400"]};

      min-width: 20px;
      min-height: 20px;
      padding: 0.3rem 0.5rem;
      border-radius: 8px;
    }
  }
`;
