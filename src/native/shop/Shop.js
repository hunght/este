// @flow
import type { State, Todo } from '../../common/types';
import React from 'react';
import todosMessages from '../../common/todos/todosMessages';
import { Box, Text, TextInput } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { ScrollView, StyleSheet } from 'react-native';
import { compose, isEmpty, prop, reverse, sortBy, values } from 'ramda';
import { connect } from 'react-redux';
import { toggleTodoCompleted } from '../../common/todos/actions';

type TodoItemProps = {
  todo: Todo,
  toggleTodoCompleted: typeof toggleTodoCompleted
};

const TodoItem = ({ todo }: TodoItemProps) =>
  <Box
    borderBottomWidth={1}
    flexDirection="row"
    flexWrap="nowrap"
    height={2}
    style={theme => ({
      borderBottomColor: theme.colors.open.gray3,
      borderBottomWidth: StyleSheet.hairlineWidth
    })}
  >
    <TextInput editable={false} flex={1} height={2} marginHorizontal={0.5} value={todo.title} />
  </Box>;

const IsEmpty = () =>
  <Box alignItems="center" justifyContent="center" flex={1}>
    <FormattedMessage {...todosMessages.empty}>
      {message =>
        <Text bold color="gray" marginTop={1} size={1}>
          {message}
        </Text>}
    </FormattedMessage>
  </Box>;

type ShopProps = {
  todos: Array<Todo>,
  toggleTodoCompleted: typeof toggleTodoCompleted
};

const Shop = ({ todos, toggleTodoCompleted }: ShopProps) => {
  if (isEmpty(todos)) {
    return <IsEmpty />;
  }

  const sortedShop = compose(
    reverse,
    sortBy(prop('createdAt')),
    values // object values to array
  )(todos);

  return (
    <ScrollView>
      {sortedShop.map(todo =>
        <TodoItem todo={todo} toggleTodoCompleted={toggleTodoCompleted} key={todo.id} />
      )}
    </ScrollView>
  );
};

export default connect(
  (state: State) => ({
    todos: state.todos.all
  }),
  { toggleTodoCompleted }
)(Shop);
