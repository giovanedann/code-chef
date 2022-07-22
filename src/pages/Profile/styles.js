import styled from 'styled-components';

export const ProfilePageContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const ProfileContentContainer = styled.section`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  h3 {
    font-size: 1.5rem;
  }
`;

export const ProfileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    width: 12rem;
    height: 4rem;
    border-style: none;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.main.dark};
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
  }
`;
