import React from 'react';
import { LabelContainer, StyledCheckboxInput, Checkmark } from './styled';

interface CustomCheckboxProps {
    label: string;
    name: string;
    id: string;
    disabled?: boolean;
    fontType?: 'paragraph' | 'caption';
    value: any;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox = ({
    label,
    name,
    id,
    disabled = false,
    fontType = 'paragraph',
    value,
    checked = false,
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
                checked={checked}
            />
            <Checkmark />
        </LabelContainer>
    );
};

export default CustomCheckbox;
