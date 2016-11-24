/* @flow */
/* eslint-disable no-unused-vars, jsx-a11y/anchor-has-content */
import type { Props as TextProps } from './Text';
import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router';
import { textStyles } from './Text';

type Props = {
  exactly?: boolean,
  to: string,
} & TextProps;

const routerLinkActiveStyle = { textDecoration: 'underline' };

const AnchorOrRouterLink = ({ bold, exactly, inverted, small, to, ...props }: Props) => {
  const isExternalLink = to.includes('://');
  return isExternalLink ?
    <a
      {...props}
      href={to}
    />
  :
    <RouterLink
      {...props}
      activeOnlyWhenExact={exactly}
      activeStyle={routerLinkActiveStyle}
      to={to}
    />;
};

const Link = styled(AnchorOrRouterLink)`
  ${textStyles}
  color: ${props => props.inverted ? props.theme.colors.white : props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;

export default (props: Props) => <Link {...props} />;
