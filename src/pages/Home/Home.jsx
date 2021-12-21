import React from 'react';
import {
  Logo, Input, Header, Profile,
} from '../../components';

const Home = function () {
  return (
    <>
      <Header>
        <Logo>Músicas</Logo>
        <Profile />
      </Header>
      <Input />
    </>
  );
};

export default Home;
