import styled from 'styled-components';

export const Logo = styled.h1`
  font-family: ${(props) => props.theme.fonts.poppins};
  font-size: ${(props) => props.theme.sizes.xlarge};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;
