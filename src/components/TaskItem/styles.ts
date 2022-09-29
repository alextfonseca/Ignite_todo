import styled from "styled-components";

export const TasksItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;

  background: ${(props) => props.theme["gray-500"]};

  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid transparent;

  transition: all 0.3s;

  &:hover {
    border: 1px solid ${(props) => props.theme["purple-100"]};
  }

  p {
    width: 100%;
    color: #fff;
    font-size: 0.875rem;
  }
`;

export const CompletedTaskButton = styled.button`
  display: block;
  width: 25px;
  height: 25px;
  background: ${(props) => props.theme["purple-200"]};
  border: none;
  padding: 0;

  border-radius: 100%;

  div {
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 100%;
  }
`;

export const RemoveTaskButton = styled.button`
  background: none;
  border: none;

  &:hover {
    filter: brightness(0.7);
  }

  img {
    width: 40px;
    height: 40px;
  }
`;
