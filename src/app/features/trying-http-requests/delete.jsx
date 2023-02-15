import { Formik, Form, Field, ErrorMessage } from 'formik';
import RecetaService from '../../http/RecetaService'



export default class RecipeRemoval extends RecetaService {



  render() {
    return <div>

      <h1 style={{ marginBottom: '100px' }} >Borrando!!!</h1>
      <Formik
        initialValues={{
          id: ''
        }}

        onSubmit={(recipe) => {
          this.borrar(`${recipe.id}`)

        }
        }

      >
        {() => (
          <Form>
            <h1>Id!</h1>
            <Field type="text" name="id" placeholder='acá el id!' />
            <ErrorMessage name="id" component="div" />
            <button type="submit" >
              Delete
            </button>
          </Form>
        )}
      </Formik>
    </div>
  };
}
