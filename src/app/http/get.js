import BASE from './base';

export default class RecipeList extends BASE {
  state = {
    Recetas: []
  }

  componentDidMount() {
    this.traerTodas()
  }

  render() {
    const recipeList = this.state.Recetas.map(
      receta => <li key={receta.id.toString()}>
        {receta.title}</li>)
    return (
      <ul>
        {recipeList}
      </ul>
    )
  }
}