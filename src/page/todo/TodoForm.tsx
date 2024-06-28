
import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
    onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef<HTMLInputElement>(null);

    //  인풋에 텍스트 입력하면 상태변수로 텍스트 저장
    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setText(value);
    }

    const onSubmit = (e: FormEvent) =>{
        e.preventDefault();
        onAdd(text);
        setText(''); //입력 필드를 비웁니다(공백 문자열로 설정).
        if (textRef.current) {
            textRef.current.focus();
        }
    }

  return (
    <>
        <div className='form-wrap'>
            <form className="form-search" onSubmit={onSubmit}>
                <input type="text" className='form-control'
                    value={text}
                    onChange={changeInput}
                    placeholder='할일을 입력하세요.'
                    ref={textRef}
                 />
                <button type='submit' >등록</button>
            </form>
        </div>  
    </>
  );
};

<style>

</style>
export default TodoForm;