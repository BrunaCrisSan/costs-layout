import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Adicione um console.log para debug
        console.log('Dados recebidos da API:', data);

        // Verifique se data é o array direto ou se está dentro de uma propriedade
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (data.categories && Array.isArray(data.categories)) {
          // Se a API retornar { categories: [...] }
          setCategories(data.categories);
        } else {
          console.error('Formato de dados inválido:', data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
