import { Formik, Form, Field, ErrorMessage } from 'formik';
import RecetaService from './RecetaService';

export default class RecipePutage extends RecetaService {


  
  render() {
    return <div>

      <h1>Actualizando!!!</h1>
      <Formik
        initialValues={{
          title: '',
          subtitle: '',
          imageSource: '',
          description: '',
          id: ''
        }}

        onSubmit={(recipe) => {
          this.cambiar(`${recipe.id}`, recipe)
        }
        }

      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
            <Field type="text" name="subtitle" />
            <ErrorMessage name="subtitle" component="div" />
            <Field type="text" name="imageSource" />
            <ErrorMessage name="imageSource" component="div" />
            <Field type="text" name="description" />
            <ErrorMessage name="description" component="div" />
            <Field type="text" name="id" />
            <ErrorMessage name="id" component="div" />
            <button type="submit" >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  };
}
