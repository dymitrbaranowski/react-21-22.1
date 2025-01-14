import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = () => {
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="title">
          Описание
          <Field type="text" name="title" />
        </label>
        <br />
        <label htmlFor="title">
          Ссылка
          <Field type="text" name="link" />
        </label>
        <br />
        <button type="submit">Добавить материал</button>
      </Form>
    </Formik>
  );
};
