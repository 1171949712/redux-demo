
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED': 
            return todos.filter(item => item.completed);
        case 'SHOW_ACTIVE': 
            return todos.filter(item => !item.completed);
        case 'SHOW_ALL':
            return todos;
        default: 
            throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDisptchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDisptchToProps
)(TodoList)

export default VisibleTodoList;