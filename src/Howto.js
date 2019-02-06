import React from 'react';
import { List, Jumbotron, Container } from 'bootstrap-4-react';

const Howto = () => {
  return (
    <Container mt='5'>
      <Jumbotron>
        <h1>How to use this thing</h1>
        <List mb='0'>
          <List.Item>Add your numbers</List.Item>
          <List.Item>Turn it into addition</List.Item>
          <List.Item>Enter your answer</List.Item>
        </List>
      </Jumbotron>
    </Container>
  );
};

export default Howto;