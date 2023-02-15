import RecetaService from '../../http/RecetaService';
import Tarjetita from '../card/card';

export default class RecipeGetage extends RecetaService {
  state = {
    Recetas: []
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.traerTodas(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {


    const recipeLista = this.state.Recetas.map(
      receta => <Tarjetita key={receta.id.toString()} title={receta.title}
        description={receta.description}
        id={receta.id} />)

    return (
      <div style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {recipeLista}
      </div >
    )
  }
}