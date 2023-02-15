
import BASE from './base';

export default class RecetaService extends BASE {

  constructor() {
    super(`https://localhost:7189/api/Recetas/`)
  }

}