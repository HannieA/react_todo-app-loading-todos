import React from 'react';
import {Todo} from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  todos: Todo[];
  handleOnClick: (filter: string) => void;
  selectedOption: string;
}
export const Footer: React.FC<Props> = ({ todos, handleOnClick, selectedOption }) => {
  const todoCounter = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${todoCounter} items left`}
      </span>

      {/* Active filter should have a 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames("filter__link", {"selected": selectedOption === 'All'})}
          data-cy="FilterLinkAll"
          onClick={() => handleOnClick('All')}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames("filter__link", {"selected": selectedOption === 'Active'})}
          data-cy="FilterLinkActive"
          onClick={() => handleOnClick('Active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames("filter__link", {"selected": selectedOption === 'Completed'})}
          data-cy="FilterLinkCompleted"
            onClick={() => handleOnClick('Completed')}
        >
          Completed
        </a>
      </nav>

      {/* don't show this button if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
      {/* Hide the footer if there are no todos */}
    </footer>
);
};