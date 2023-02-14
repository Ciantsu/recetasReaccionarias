
import BASE from './base';
import apiador from './api';
import React from 'react';


const API = apiador(`https://localhost:7189/api/Recetas/`);


export default class RecetaService extends React.Component {
    traerTodas() {
        API.get()
          .then(res => {
            const Recetas = res.data;
            this.setState({ Recetas });
          })
      }
    
      borrar(id) {
        API.delete(id)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
      subir(recipe) {
        API.post('', recipe)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      }
    
      cambiar(id, recipe) {
        API.put(id, recipe)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      }
}