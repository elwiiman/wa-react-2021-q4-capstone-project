import React from 'react';
import { LabelContainer, StyledCheckboxInput, Checkmark } from './styled';

interface CustomCheckboxProps {
    label: string;
    name: string;
    id: string;
    disabled?: boolean;
    fontType?: 'paragraph' | 'caption';
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox = ({
    label,
    name,
    id,
    disabled = false,
    fontType = 'paragraph',
    value,
    onChange,
}: CustomCheckboxProps) => {
    return (
        <LabelContainer htmlFor={id} fontType={fontType} disabled={disabled}>
            {label}
            <StyledCheckboxInput
                type="checkbox"
                name={name}
                id={id}
                disabled={disabled}
                value={value}
                onChange={onChange}
            />
            <Checkmark />
        </LabelContainer>
    );
};

export default CustomCheckbox;
