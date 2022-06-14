import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { BsArrowLeft as ArrowLeft } from 'react-icons/bs';

const About = () => {
  return (
    <Link to="/">
      <Button
        leftIcon={<ArrowLeft size={18} />}
      >
        Back to home
      </Button>
    </Link>
  );
};

export default About;
