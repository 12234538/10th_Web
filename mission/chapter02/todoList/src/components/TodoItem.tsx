import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

type Task = {
  id: number;
  text: string;
};

function TodoItem({ task }: { task: Task }) {
  const context = useContext(TodoContext);
  if (!context) return null;

  const { moveToDone } = context;

  return (
    <li className="render-container__item">
      <span>{task.text}</span>
      <button
        type="button"
        className="render-container__item-combutton"
        onClick={() => moveToDone(task)}
      >
        완료
      </button>
    </li>
  );
}

export default TodoItem;
