import styled, { css } from "styled-components";

const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  primary: css`
    color: ${({ theme }) => theme.red};
  `,
};

const sizeVariants = {
  normal: css`
    ${({ theme }) => theme.normal}
  `,
  medium: css`
    ${({ theme }) => theme.medium}
  `,
  large: css`
    ${({ theme }) => theme.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge}
  `,
  small: css`
    ${({ theme }) => theme.small}
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall}
  `,
  xxsmall: css`
    ${({ theme }) => theme.xxsamll}
  `,
};

const StyleText = styled.span`
 font-size: ${({size}) => sizeVariants[size] || sizeVariants.normal};
 ${({ type }) => typeVariants[type]};
 ${({ bold }) => bold && `font-weight: 500`};

`;
export default StyleText;
