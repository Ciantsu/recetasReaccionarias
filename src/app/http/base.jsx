import apiador from './api';
import React from 'react';



export default class BASE extends React.Component {

    constructor(url) {
        super()
        this.client = apiador(url)
    }
  traerTodas() {
    this.client.get()
      .then(res => {
        const Recetas = res.data;
        this.setState({ Recetas });
      })
  }

  borrar(id) {
    this.client.delete(id)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  subir(recipe) {
    this.client.post('', recipe)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  cambiar(id, recipe) {
    this.client.put(id, recipe)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
}