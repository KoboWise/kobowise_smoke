"use client";

import { Formik } from "formik";

export default function FormWrapper({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <form
          className='flex justify-evenly flex-col gap-4 md:gap-6 w-full'
          onSubmit={handleSubmit}
        >
          {children}
        </form>
      )}
    </Formik>
  );
}
