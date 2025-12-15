import { useLocation } from 'react-router-dom';
import Message from '../layout/Message';
import Container from '../layout/Container';
import styles from './Projects.module.css';
function Projects() {
  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }
  return (
    <div>
      <div>
        <h1>Meus Projetos</h1>
        <a href="">Novo Projeto</a>
      </div>
      {message && <Message type={'Sucess'} msg={message} />}
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
}
export default Projects;
