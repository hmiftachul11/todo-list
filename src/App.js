import { Container, Heading, Center } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';

function App() {
  return (
    <Container maxW="container.sm">
      <Center>
        <Heading my="4">Todo List</Heading>
      </Center>
      <AddTodo />
      <VisibilityFilter />
      <TodoList />

    </Container>
  );
}

export default App;
