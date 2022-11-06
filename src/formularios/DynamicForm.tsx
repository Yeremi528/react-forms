import formJson from "../data/custom-form.json";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components-form";
import { Formik, Form } from "formik";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimo de ${(rule as any).value || 2} caracteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email(`Revise el formato del email`);
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div className="h-screen bg-gray-800">
      <h1 className="text-center text-xl font-semibold pb-6">Dynamic Form</h1>

      <Formik
        
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form 
          className="text-gray-800 bg-white m-auto w-1/2 rounded" 
          noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                        <MyTextInput
                        key={name}
                        type={type as any}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                    />
                    
                 
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`El type: ${type}, no es soportado`);
            })}
            <div className="mx-4 mt-6 w-4/12 flex justify-center items-center bg-gray-900 rounded py-2">
                <button className="text-gray-100 font-bold text-center" type="submit">Submit</button>
            </div>
            
            <div className="pb-10">

            </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};
