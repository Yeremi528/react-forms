import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}


export const MyTextInput = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props)

    return (
        <div className='pt-4 mx-4'>
            <label  className="block font-semibold" htmlFor={ props.id || props.name }>{ label }</label>
            <input className="shadow-md py-2 w-full" { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
        </div>
    )
}