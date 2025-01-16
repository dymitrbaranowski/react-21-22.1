import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values)
      .then(() => actions.resetForm())
      .then(() => actions.setSubmitting(false))
      .then(() => actions.setStatus({ success: true }))
      .then(() => console.log('hahaha'));
    // actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field type="text" name="title" />
          </label>
          <br />
          <label>
            Ссылка
            <Field type="text" name="link" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
};
