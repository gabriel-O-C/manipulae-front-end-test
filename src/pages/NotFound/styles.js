import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.sizes.xlarge};
  margin-bottom: 10px;
`;

export const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.sizes.large};
`;
