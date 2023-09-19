import { Container } from "react-bootstrap";
import Pizza from "./Pizza";

function Main() {
    return (
      <main className="py-3">
        <Container>
          <Pizza />
        </Container>
      </main>
    );
  }
  
  export default Main;