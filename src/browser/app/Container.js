/* @flow */
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 1024px;
  padding-left: ${props => props.theme.scale[1]}px;
  padding-right: ${props => props.theme.scale[1]}px;
  ${''/* for sticky footer */}
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Container;
