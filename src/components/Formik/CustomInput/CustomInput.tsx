import React from 'react';
import Input from '../../Common/Input';
import {
    ReusableFieldContainer,
    Label,
    ErrorLabel,
    ExtraMessage,
} from './styled';
import { useField, useFormikContext } from 'formik';

export interface CustomInput {
    normalize?: (value: string) => string;
    extraActionInOnchange?: (value: string) => any;
    id: string;
    name: any;
    label?: string;
    type?: string;
    extraMessage?: string;
    placeholder?: string;
    ref?: React.Ref<HTMLInputElement> | undefined;
    css?: any;
}

const ReusableField = React.forwardRef(
    (
        props: CustomInput & React.HTMLProps<HTMLInputElement>,
        ref: CustomInput['ref']
    ) => {
        const {
            normalize = undefined,
            extraActionInOnchange = undefined,
            id = '',
            name = '',
            label = '',
            type = 'text',
            extraMessage = '',
            placeholder = '',
            as,
            ...rest
        } = props;

        const { setFieldValue } = useFormikContext();
        const [field, meta] = useField({ name, type });

        field.onChange = (e: any) => {
            const value = e && e.target ? e.target.value : e;
            setFieldValue(field.name, normalize ? normalize(value) : value);
            if (extraActionInOnchange) {
                extraActionInOnchange(value);
            }
        };

        if (type === 'hidden')
            return (
                <Input
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    error={meta.touched && meta.error ? true : false}
                    ref={ref}
                    {...field}
                    {...rest}
                />
            );

        return (
            <ReusableFieldContainer>
                {label ? <Label htmlFor={name}>{label}</Label> : null}
                <Input
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    error={meta.touched && meta.error ? true : false}
                    ref={ref}
                    {...field}
                    {...rest}
                />
                {meta.touched && meta.error ? (
                    <ErrorLabel>{meta.error}</ErrorLabel>
                ) : null}
                {extraMessage ? (
                    <ExtraMessage>{extraMessage}</ExtraMessage>
                ) : null}
            </ReusableFieldContainer>
        );
    }
);

export default ReusableField;
