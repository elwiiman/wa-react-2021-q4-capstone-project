import React from 'react';
import { Formik } from 'formik';

interface Iprops {
    initialValues: any;
    validationSchema: Object;
    onSubmit(value?: any, formikBag?: any): any;
    children: React.ReactNode;
}

const FormikBase = ({
    initialValues = {},
    validationSchema = {},
    onSubmit,
    children,
}: Iprops) => {
    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {children}
        </Formik>
    );
};

export default FormikBase;
