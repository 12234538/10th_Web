import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

type Task = {
  id: number;
  text: string;
};

function DoneItem({ task }: { task: Task }) {
  const context = useContext(TodoContext);
  if (!context) return null;

  const { deleteDone } = context;

  return (
    <li className="render-container__item">
      <span>{task.text}</span>
      <button
        type="button"
        className="render-container__item-delbutton"
        onClick={() => deleteDone(task.id)}
      >
        삭제
      </button>
    </li>
  );
}

export default DoneItem;