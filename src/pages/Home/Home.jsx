import React, { useState } from 'react';
import {
  Button,
  useMantineColorScheme,
} from '@mantine/core';
import { Wrapper } from '~/common/Wrapper';
import { Link } from 'react-router-dom';
import { HomeContainer } from './Home.style';
import 'twin.macro';

const Home = () => {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Wrapper>
      <HomeContainer>
        <Button mt="xl">This is home</Button>
        <Button
          onClick={() => toggleColorScheme()}
          mt="xl"
        >Toggle Dark Mode
        </Button>
        <Link
          to="about"
          tw="mt-2 dark:mt-10"
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
