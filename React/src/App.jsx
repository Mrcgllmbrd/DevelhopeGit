import { Container } from "./Container";
import { ContainerVariante } from "./ContainerVariante";
import { TodoList } from "./TodoList";

export function App() {
  return (
    <div>
      {" "}
      <Container title={<h1> Hey You!</h1>}>
        <h2>Welcome to my app</h2>
        <h3>enjoy your list</h3>
        <TodoList />
      </Container>
      <ContainerVariante title={<h1> Hey You!</h1>}>
        <h2>Welcome to my app</h2>
        <h3>enjoy your list</h3>
        <TodoList />
      </ContainerVariante>
    </div>
  );
}
