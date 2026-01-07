import SubmitButton from '../form/SubmitButton';
import Input from '../form/Input';
import styles from '../project/ProjectForm.module.css';
import { useState } from 'react';

function ServiceForm({ handleOnChange, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();

    const updatedProject = {
      ...projectData,
      services: [...(projectData.services || []), service],
    };

    handleOnChange(updatedProject); // ✅ função correta
  }

  function handleServiceChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleServiceChange}
      />

      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleServiceChange}
      />

      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleServiceChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
