import React from 'react';
import TodoItem from '../../components/todo/TodoItem';

interface TodoItemType {
    id: number;
    text: string;
    isChk: boolean;
}

interface TodoListProps {
    data: TodoItemType[];
    onDel: (id: number) => void;
    onMod: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ data, onDel, onMod }) => {
  return (
    <div>
		<ul className='list'>
            {data.map(item => (
                <TodoItem 
                    key={item.id}
                    item={item}
                    onDel={onDel}
                    onMod={onMod}
                />
            ))}
		</ul>
    </div>
  );
};

export default TodoList;