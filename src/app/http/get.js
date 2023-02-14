import RecetaService from './RecetaService';

export default class RecipeList extends RecetaService {
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