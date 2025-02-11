import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ todo, ind, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(ind)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
