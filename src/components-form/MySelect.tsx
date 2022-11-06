import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}


export const MySelect = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props)

    return (
        <div className='pt-4 mx-4'>
            <label className='block font-semibold' htmlFor={ props.id || props.name }>{ label }</label>
            <select { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
        </div>
    )
}