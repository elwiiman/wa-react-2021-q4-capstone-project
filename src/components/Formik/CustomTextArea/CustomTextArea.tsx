import { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import {
    ReusableFieldContainer,
    StyledTextArea,
    Label,
    ErrorLabel,
    ExtraMessage,
    WarnMessage,
    ChartsContainerFixedWidth,
    ChartsParagraph,
    ErrorsAndMessagesContainer,
    ErrorContainer,
} from './styled';

export interface CustomTextAreaProps {
    id: string;
    name: string;
    label?: string;
    warnMessage?: string;
    maxLength?: number;
    maxRows?: number;
    showCharactersLeft?: boolean;
    extraMessage?: string;
    placeholder?: string;
}

const CustomTextArea = (props: CustomTextAreaProps) => {
    const {
        id = '',
        name = '',
        label = '',
        warnMessage = '',
        maxLength = 400,

        showCharactersLeft = false,
        extraMessage = '',
        placeholder = '',
        ...rest
    } = props;
    const { status, setStatus, setFieldValue, handleBlur } = useFormikContext();

    //component state
    const [field, meta] = useField(name);
    const [isFilling, setIsFilling] = useState(false);
    const [charactersLeft, setCharactersLeft] = useState(maxLength);
    const value = meta.value;

    //overwrite onChange formik's function
    field.onChange = (e: any) => {
        const value = e && e.target ? e.target.value : e;
        setFieldValue(field.name, value);

        if (showCharactersLeft) {
            setCharactersLeft(e.target.maxLength - e.target.value.length);
        }
    };

    useEffect(() => {
        if (meta.touched && value === '') {
            setStatus({ warning: true });
        } else {
            setStatus({ warning: false });
        }
        // eslint-disable-next-line
    }, [value, meta.touched]);

    const getCharClassName = () => {
        const fulfillmentPercentage = (charactersLeft / maxLength) * 100;

        if (fulfillmentPercentage < 15 && fulfillmentPercentage >= 6)
            return 'warning';
        if (fulfillmentPercentage < 6) return 'danger';
        return undefined;
    };

    return (
        <ReusableFieldContainer>
            {label ? <Label htmlFor={props.name}>{label}</Label> : null}

            <StyledTextArea
                {...field}
                {...rest}
                placeholder={placeholder}
                maxLength={maxLength}
                onBlur={(e: any) => {
                    handleBlur(e);
                    setIsFilling(false);
                }}
                id={id}
                onFocus={() => setIsFilling(true)}
                error={meta.touched && meta.error ? true : false}
            />

            <ErrorsAndMessagesContainer>
                <ErrorContainer>
                    {/* error */}
                    {meta.touched && meta.error ? (
                        <ErrorLabel>{meta.error}</ErrorLabel>
                    ) : null}
                    {/* extraMessage */}
                    {!meta.error && !warnMessage ? (
                        <ExtraMessage>{extraMessage}</ExtraMessage>
                    ) : null}

                    {/* warning */}
                    {warnMessage &&
                    meta.touched &&
                    status.warning &&
                    !meta.error ? (
                        <WarnMessage>{warnMessage}</WarnMessage>
                    ) : null}
                </ErrorContainer>

                {/* characters left */}
                {isFilling && showCharactersLeft && (
                    <ChartsContainerFixedWidth>
                        <ChartsParagraph status={getCharClassName()}>
                            <span>{charactersLeft}</span> remaining characters.
                        </ChartsParagraph>
                    </ChartsContainerFixedWidth>
                )}
            </ErrorsAndMessagesContainer>
        </ReusableFieldContainer>
    );
};

export default CustomTextArea;
