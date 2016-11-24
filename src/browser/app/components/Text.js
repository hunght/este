/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

export type Props = {
  bold?: boolean,
  inverted?: boolean,
  small?: boolean,
};

export const textStyles = css`
  color: ${props => props.inverted ? props.theme.colors.white : props.theme.colors.black};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes[props.small ? 5 : 4]}px;
  font-weight: ${props => props.bold ? props.theme.bold : 'normal'};
  line-height: ${props => props.theme.lineHeight};
`;

const Text = styled.span`${textStyles}`;

export default (props: Props) => <Text {...props} />;
