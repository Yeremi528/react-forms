import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

export const Register = () => {
  const validationSchema = new yup.ObjectSchema({
    name: yup.string().required('The name is required'),
    email: yup.string().email('The email is not valid').required('The email is required'),
    repeatEmail: yup.string().email('The email is not valid').oneOf( [yup.ref('email')], 'The email must be equal' ).required('The email is required'),
    password: yup.string().min(6,'The password must have more of 6 characters').required('The password is required')
  })
  return (
    <div>
      <Formik  validationSchema={validationSchema}
        initialValues={{ name: "", email: "", repeatEmail: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({values,handleBlur,handleChange,handleSubmit,handleReset}) => (
          <form onSubmit={handleSubmit} className="text-gray-800 bg-white m-auto w-1/2  rounded shadow-md pb-10">
            <div className="pt-4 mx-4">
              <label className="block font-semibold">Name</label>
              <input
              className="shadow-md py-2 w-full"
              value={values.name} 
              name="name"
              type="text" 
              id="name" 
              onChange={handleChange}/>
              <ErrorMessage name="name" component="span"/>

            </div>
            <div className="pt-4 mx-4">
              <label className="block font-semibold">Email</label>
              <input
              className="shadow-md py-2 w-full"
              value={values.email}
              name="email"
              id="email" 
              onBlur={handleBlur}
              onChange={handleChange}/>
              <ErrorMessage name="email"  component="span"/>

            </div>
            <div className="pt-4 mx-4">
              <label className="block font-semibold">Repeat Email</label>
              <input 
              className="shadow-md py-2 w-full"
              value={values.repeatEmail}
              name="repeatEmail"
              id="repeatEmail"
              onBlur={handleBlur}
              onChange={handleChange}/>
              <ErrorMessage name="repeatEmail"  component="span"/>

            </div>
            <div className="pt-4 mx-4">
              <label className="block font-semibold">Password</label>
              <input 
              className="shadow-md py-2 w-full"
              value={values.password}
              name="password"
              id="password"
              onChange={handleChange}/>
              <ErrorMessage name="password" component="span"/>
            </div>
            <div className="flex items-center  justify-center mt-2 w-full border">
                <button type="submit"  className="bg-gray-800 text-gray-100 font-bold mx-2 transition hover:scale:110 w-full rounded duration-300 py-2">Enviar</button>
            </div>
            <div className="flex items-center  justify-center mt-2 w-full border">
                <button onClick={handleReset}  className="bg-gray-800 text-gray-100 font-bold mx-2 transition hover:scale:110 w-full rounded duration-300 py-2">Resetear</button>
            </div>
            
          </form>
        )}
      </Formik>
    </div>
  );
};
