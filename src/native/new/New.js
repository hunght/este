// @flow
import Header from './Header';
import React from 'react';
import NewList from './NewList';
import { Box } from '../../common/components';

const New = () =>
  <Box flex={1}>
    <Header />
    <NewList />
  </Box>;

export default New;
