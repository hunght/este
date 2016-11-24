/* @flow */
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Link, Text } from './components';

const messages = defineMessages({
  madeByHtml: {
    defaultMessage: 'Made with love by',
    id: 'footer.madeByHtml',
  },
});

const StyledFooter = styled.footer`
  align-items: center;
  border-top: solid 1px ${props => props.theme.border.color};
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.scale[2]}px;
  padding-bottom: ${props => props.theme.scale[2]}px;
  padding-top: ${props => props.theme.scale[2]}px;
`;

const Footer = () => (
  <StyledFooter>
    <Text small>
      <FormattedMessage {...messages.madeByHtml} />
      {'\u00a0'}
      <Link small to="https://twitter.com/steida">
        steida
      </Link>
    </Text>
  </StyledFooter>
);

export default Footer;
