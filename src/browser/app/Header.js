/* @flow */
import type { State, User } from '../../common/types';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { Link, Toolbar } from './components';
import { connect } from 'react-redux';

type Props = {
  viewer: ?User,
};

const Header = ({ viewer }: Props) => (
  <Toolbar>
    <Link bold inverted exactly to="/">
      <FormattedMessage {...linksMessages.home} />
    </Link>
    <Link bold inverted to="/users">
      <FormattedMessage {...linksMessages.users} />
    </Link>
    <Link bold inverted to="/todos">
      <FormattedMessage {...linksMessages.todos} />
    </Link>
    <Link bold inverted to="/fields">
      <FormattedMessage {...linksMessages.fields} />
    </Link>
    <Link bold inverted to="/intl">
      <FormattedMessage {...linksMessages.intl} />
    </Link>
    <Link bold inverted to="/offline">
      <FormattedMessage {...linksMessages.offline} />
    </Link>
    <Link bold inverted to="/me">
      <FormattedMessage {...linksMessages.me} />
    </Link>
    {!viewer &&
      <Link bold inverted to="/signin">
        <FormattedMessage {...linksMessages.signIn} />
      </Link>
    }
  </Toolbar>
);

export default connect(
  (state: State) => ({
    viewer: state.users.viewer,
  }),
)(Header);
