import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
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
        <button type="submit">Добавить материал</button>
      </Form>
    </Formik>
  );
};
