import React from 'react';
import * as Styled from './styles';

const Input = function () {
  return (
    <Styled.Wrapper>
      <Styled.Input
        type="search"
        placeholder="O que você quer ouvir agora?"
      />
    </Styled.Wrapper>
  );
};

export default Input;
