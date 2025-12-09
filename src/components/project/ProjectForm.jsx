function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o orçamento total" />
      </div>
      <div>
        <section name="category_id">
          <option disabled>Selecione a categoria</option>
        </section>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
