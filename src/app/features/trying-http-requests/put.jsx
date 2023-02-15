import { Formik, Form, Field, ErrorMessage } from 'formik';
import RecetaService from '../../http/RecetaService';

export default class RecipePutage extends RecetaService {



  render() {
    return <div>

      <h1 style={{ marginBottom: '100px' }}>Actualizando!!!</h1>
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
        {() => (
          <Form>
            <h1>Id!</h1>
            <Field type="text" name="id" placeholder='acá el id!' />
            <ErrorMessage name="id" component="div" />
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
            <div>
              <button type="submit" >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  };
}
