/* @flow */
import React from 'react';
import { Heading, Text } from './';
import styled from 'styled-components';

type Props = {
  heading: string | Function,
  description?: string | Function,
};

const StyledHeader = styled.header`
  border-bottom: solid 2px ${props => props.theme.border.color};
  margin-bottom: ${props => props.theme.scale[3]}px;
  margin-top: ${props => props.theme.scale[3]}px;
  padding-bottom: ${props => props.theme.scale[1]}px;
  padding-top: ${props => props.theme.scale[2]}px;
`;

const PageHeader = ({ heading, description }: Props) => (
  <StyledHeader>
    <Heading level={1}>
      {heading}
    </Heading>
    {description &&
      <Text>
        {description}
      </Text>
    }
  </StyledHeader>
);

export default PageHeader;
