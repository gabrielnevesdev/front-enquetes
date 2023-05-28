import Container from "../../components/container";
import Background from "../../components/background";
import Navbar from "../../components/navBar";
import CreateQuiz from "../../components/createQuiz";
export default function Create() {
  return (
    <Background>
      <Navbar />
      <Container>
        <CreateQuiz />
      </Container>
    </Background>
  );
}
