import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';




const Basic = () => (

  <div>
    
    <h1>En tu cara y en tu cancha</h1>
    <Formik
      initialValues={{
        title: '',
        subtitle: '',
        imageSource: '',
        description: ''
      }}
      
      onSubmit={(recipe, { setSubmitting }) => {
          axios.post(`https://localhost:7189/api/Recetas`, recipe)
            .then(res => {
              console.log(res);
              console.log(res.data);
              setSubmitting(false);
            })
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
          <button type="submit" >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div >
);

export default Basic;