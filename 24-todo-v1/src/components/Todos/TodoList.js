import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, ind) => (
        <Todo key={ind} todo={todo} ind={ind} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
