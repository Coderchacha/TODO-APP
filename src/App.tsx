import React from 'react';
import styled from 'styled-components';

interface TodoProps {
  checked: boolean;
  onClick: () => void;
}

export const App = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Background>
      <Todo>
        <TodoHeader>
          <Title>My Todo List</Title>
          <TodoInput type='text' placeholder='Add a new goal' />
          <TodoAddBtn type='button'>+</TodoAddBtn>
        </TodoHeader>

        <ul>
          <TodoListTitle>ToDo List</TodoListTitle>
          <TodoList>
            <TodoListCheckBox
              checked={isChecked}
              onClick={handleCheckboxChange}
            />
            <TodoListLabel>운동하기</TodoListLabel>
            <TodoListDeleteBtn>
              <TodoListDeleteBtnSvg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </TodoListDeleteBtnSvg>
            </TodoListDeleteBtn>
          </TodoList>
        </ul>
      </Todo>
    </Background>
  );
};

const Background = styled.div`
  background-color: #f3f4f6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Todo = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border-color: transparent;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoHeader = styled.div`
  margin-bottom: 20px;
`;

const TodoListTitle = styled.h2`
  font-size: 15px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TodoInput = styled.input`
  background-color: #f1f1f1;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.1);
  margin-right: 5px;
`;

const TodoAddBtn = styled.button`
  background-color: #0ba5be;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 50px -3px rgba(0, 0, 0, 0.1);
`;

const TodoList = styled.li`
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.1);
  width: 20rem;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-bottom: 10px;
`;

const TodoListCheckBox = styled.div<TodoProps>`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  background-color: ${(props) => (props.checked ? '#007bff' : 'white')};
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const TodoListLabel = styled.label`
  font-size: 15px;
`;

const TodoListDeleteBtn = styled.button``;

const TodoListDeleteBtnSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: transparent;
`;
