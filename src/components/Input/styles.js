import styled from 'styled-components';
import searchIcon from '../../assets/search.svg';

export const Input = styled.input`
  width: 60vw;
  height: 35px;
  background-color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.roboto};
  font-size: ${(props) => props.theme.sizes.medium};
  border: 1px solid ${(props) => props.theme.colors.gray};
  font-weight: bold;
  outline: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;
  padding: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
