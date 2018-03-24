import React from 'react';
import styled, { css, injectGlobal } from 'styled-components';

export const headingStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:900,900i&subset=latin-ext');
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: black;
  color: ${props => props.color};
`;

export const textStyles = css`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&subset=latin-ext');
  font-family: 'PT Sans', sans-serif;
  font-weight: regular;
  color: ${props => props.color};
`;

export const PartioScoutTypography = ({ el = 'div', ...props }) => {
  const Container = styled[el]`
    body,
    * {
      ${textStyles};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${headingStyles};
    }
  `;

  return <Container {...props} />;
};

export const Heading = ({ el = 'h1', ...props }) => {
  const Styled = styled[el](headingStyles);

  return <Styled {...props} />;
};

export const Text = ({ el = 'p', ...props }) => {
  const Styled = styled[el](textStyles);

  return <Styled {...props} />;
};

export const injectPartioScoutStyles = () => {
  injectGlobal`
  body, * {
    ${textStyles}
  }

  h1, h2, h3, h4, h5, h6 {
    ${headingStyles}
  }
  `;
};
