import React from 'react';
import { Button } from '@mantine/core';
import { Wrapper } from '~/common/Wrapper';
import { Link } from 'react-router-dom';
import { HomeContainer } from './Home.style';
import 'twin.macro';

const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <Button mt="xl">This is home</Button>
        <Link
          to="about"
          tw="mt-2"
        >
          <Button>
            Visit about
          </Button>
        </Link>
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
