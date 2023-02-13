import BASE from './base';
import { Formik, Form, Field, ErrorMessage } from 'formik';



export default class RecipePostage extends BASE {



  render() {
    return <div>

      <h1>SUbiendo!!!</h1>
      <Formik
        initialValues={{
          title: '',
          subtitle: '',
          imageSource: '',
          description: ''
        }}

        onSubmit={(recipe) => {
          this.subir(recipe)
            
        }
        }

      >
        {({
          isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
            <Field type="text" name="subtitle" />
            <ErrorMessage name="subtitle" component="div" />
            <Field type="text" name="imageSource" />
            <ErrorMessage name="imageSource" component="div" />
            <Field type="text" name="description" />
            <ErrorMessage name="description" component="div" />
            <button type="submit" >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  };
}
