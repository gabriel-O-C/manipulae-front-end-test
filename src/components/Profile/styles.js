import styled from 'styled-components';

export const Profile = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray};
`;
