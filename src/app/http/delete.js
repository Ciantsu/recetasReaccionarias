import { Formik, Form, Field, ErrorMessage } from 'formik';
import RecetaService from './RecetaService';



export default class RecipeRemoval extends RecetaService {



  render() {
    return <div>

      <h1>Borrando!!!</h1>
      <Formik
        initialValues={{
          id: ''
        }}

        onSubmit={(recipe) => {
          this.borrar(`${recipe.id}`)
            
        }
        }

      >
        {({
          isSubmitting }) => (
          <Form>
            <Field type="text" name="id" />
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
