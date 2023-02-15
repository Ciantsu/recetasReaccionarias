import RecetaService from '../../http/RecetaService';
import { Formik, Form, Field, ErrorMessage } from 'formik';



export default class RecipePostage extends RecetaService {



  render() {
    return <div>

      <h1 style={{ marginBottom: '100px' }}>Subiendo!!!</h1>
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
        {() => (
          <Form>
            <h1>Título!</h1>
            <Field type="text" name="title" placeholder='acá el título!' />
            <ErrorMessage name="title" component="div" />
            <h1>Subtítulo!</h1>
            <Field type="text" name="subtitle" placeholder='acá el subtítulo!' />
            <ErrorMessage name="subtitle" component="div" />
            <h1>Fuente de la imagen!</h1>
            <Field type="text" name="imageSource" placeholder='acá la fuente de tu imagen!' />
            <ErrorMessage name="imageSource" component="div" />
            <h1>Descripción!</h1>
            <Field type="text" name="description" placeholder='acá la descripción!' />
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
