/* @flow */
import styled from 'styled-components';

const Toolbar = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.scale[1]}px;
  padding: ${props => props.theme.scale[1]}px;
  padding-left: ${props => props.theme.scale[0]}px;
  padding-right: ${props => props.theme.scale[0]}px;

  > * {
    margin-left: ${props => props.theme.scale[0]}px;
    margin-right: ${props => props.theme.scale[0]}px;
  }
`;

export default Toolbar;
