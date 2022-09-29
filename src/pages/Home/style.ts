import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: 100vw;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const TasksNotExists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin: 1rem 0 0.5rem 0;
  }

  p,
  strong {
    font-size: 1rem;
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;
