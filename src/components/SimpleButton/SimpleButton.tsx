import { StyledButton } from './styled';

interface SimpleButtonProps {
    /**
     * A text or a React Element to show inside the button
     */
    label: string | React.ReactElement;
    /**
     * Boolean to show white background
     */
    enablePaperBackground?: boolean;
    /**
     * An action to be executed by the button
     */
    onClick: (...args: any[]) => void;
}

/**
 * A button with no borders and no background.
 */
const SimpleButton = ({
    label,
    enablePaperBackground,
    onClick,
}: SimpleButtonProps) => {
    return (
        <>
            <StyledButton
                onClick={onClick}
                enablePaperBackground={enablePaperBackground}
            >
                {label}
            </StyledButton>
        </>
    );
};

export default SimpleButton;
