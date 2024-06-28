import React from 'react';

interface TodoItemProps {
    item: {
        id: number;
        text: string;
        isChk: boolean;
    };
    onDel: (id: number) => void;
    onMod: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDel, onMod }) => {
    const { id, text, isChk } = item;
    return (
        <li className={isChk ? 'on' : ''}>
            <span onClick={() => onMod(id)}>&#10003;</span>
            <em>{text}</em>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;