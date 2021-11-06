import styled from 'styled-components';

interface IContainer {
    colorType?: 'contrast' | 'main' | 'paper' | 'secondary' | 'secondary_opac';
    padding?: string;
    flexCenter?: boolean;
    noPaddingTop?: boolean;
    noPaddingBottom?: boolean;
    marginTop?: string;
    width?: string;
    flexDirection?: string;
    maxWidth?: string;
    borderRadius?: string;
}

export default styled.div<IContainer>`
    background-color: ${(props) => {
        const colorType = props.colorType ? props.colorType : 'main';
        return props.theme.background[`${colorType}`];
    }};

    padding: ${(props) => (props.padding ? props.padding : '1rem')};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
    width: ${(props) => (props.width ? props.width : '')};

    ${(props) => (props.noPaddingTop ? `padding-top: 0;` : '')}
    ${(props) => (props.noPaddingBottom ? `padding-bottom: 0;` : '')}

    ${(props) =>
        props.flexCenter
            ? 'display: flex; justify-content: center; align-items: center;'
            : ''}

    ${(props) => (props.maxWidth ? `max-width:${props.maxWidth}` : '')}
    ${(props) =>
        props.borderRadius ? `border-radius:${props.borderRadius}` : ''}
  

    ${(props) =>
        props.flexDirection ? `flex-direction:${props.flexDirection}` : ''}
`;
