import styled from 'styled-components';

export const Input = styled.input`
  width: 60vw;
  height: 35px;
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.roboto};
  font-size: ${(props) => props.theme.sizes.medium};
  border: 1px solid ${(props) => props.theme.colors.gray};
`;
