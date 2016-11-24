/* @flow */
import type { Props as TextProps } from './Text';
import React from 'react';
import styled from 'styled-components';
import { textStyles } from './Text';

type Props = {
  level: number,
} & TextProps;

const Heading = styled.div`
  ${textStyles}
  font-size: ${props => props.theme.fontSizes[props.level]}px;
  line-height: 1.25;
`;

Heading.defaultProps = {
  bold: true,
};

export default (props: Props) => <Heading {...props} />;
