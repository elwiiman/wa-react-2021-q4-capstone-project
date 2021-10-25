import { StyledTitle } from './styled';
interface TitleProps {
    text: string;
    textColorType?: 'primary' | 'secondary';
    center?: boolean;
}

const Title = ({ text, textColorType, center = false }: TitleProps) => {
    return (
        <StyledTitle textColorType={textColorType} center={center}>
            {text}
        </StyledTitle>
    );
};

export default Title;
