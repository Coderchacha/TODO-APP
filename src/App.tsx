import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Background, ContentCard } from './layouts';
import { Timer } from './features/timer/Timer';
import { findTodos, Todo } from './features/todo/api';
import { useTodosQuery } from './features/todo/hooks';

// function add(a: number, b: number) {
//   return a+b
// }

// function addString(a: string, b: string) {
//   return a+b
// }

// function addGeneric<T>(a: T, b:T) {
//   return a+b
// }
// const result = add(1,2)
// const resultString = addString('1','2')
// const resultGeneric = addGeneric(1,2)
// const resultGeneric = addGeneric('1','2')
// const resultGeneric = addGeneric(true, false)
// const resultGeneric = addGeneric<number>(true, 1)

export const App = () => {
  const { data } = useTodosQuery();
  const todos = data ?? [];

  const [userInput, setUserInput] = useState<string>('');

  const handleCheckboxChange = (id: number) => {
    // setTodos((prevTodos) => {
    //   return prevTodos.map((todo) => {
    //     if (todo.id === id) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   });
    // });
  };

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      content: userInput,
      completed: false,
      createdAt: new Date(),
    };

    if (userInput.trim() !== '') {
      // setTodos([...todos, newTodo]);
    }
    setUserInput('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value);
  };

  const deleteTodo = (id: number) => {
    // const filteredTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(filteredTodos);
  };

  return (
    <Background>
      <ContentCard>
        <Timer />

        {/* TodoHeader Component */}
        <TodoHeader>
          <Title>My Todo List</Title>
          <TodoInput
            value={userInput}
            type='text'
            placeholder='Add a new goal'
            onKeyDown={(event) => handleKeyDown(event)}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
          <TodoAddBtn type='button' onClick={addTodo}>
            +
          </TodoAddBtn>
        </TodoHeader>

        {/* TodoList Component */}
        <ul>
          <TodoListTitle>ToDo List</TodoListTitle>
          {todos.length !== 0 ? (
            todos.map((todo) => {
              return (
                <TodoItem key={todo.id}>
                  <TodoTextWrapper
                    onClick={() => {
                      handleCheckboxChange(todo.id);
                    }}
                  >
                    <TodoListCheckBox checked={todo.completed} />
                    <TodoListLabel completed={todo.completed}>
                      {todo.content}
                    </TodoListLabel>
                  </TodoTextWrapper>
                  <TodoListDeleteBtn
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
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
                </TodoItem>
              );
            })
          ) : (
            <TodoEmptyAlert>새로운 GOAL을 추가해주세요.</TodoEmptyAlert>
          )}
        </ul>
      </ContentCard>
    </Background>
  );
};

const TodoHeader = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TodoListTitle = styled.h2`
  font-size: 15px;
  margin-bottom: 10px;
`;

const TodoEmptyAlert = styled.div`
  font-size: 15px;
  color: #fff;
  background-color: #cfcbc8;
  padding: 20px 10px;
  border-radius: 5px;
  box-shadow: 8px 10px 23px 0px rgba(0, 0, 0, 0.1);
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

const Bigger = keyframes`
from {
  transform: scale(1)
}
to {
  transform: scale(1.2)
}
`;

const TodoAddBtn = styled.button`
  background-color: #0ba5be;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 50px -3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: black;
    color: white;
    animation: ${Bigger} 0.5s linear;
  }
`;

const TodoItem = styled.li`
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
  cursor: pointer;
`;

const TodoTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoListCheckBox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  background-color: ${(props) => (props.checked ? '#007bff' : 'white')};
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;

  &:hover {
    border: 2px solid #007bff;
  }
`;

const TodoListLabel = styled.label<{ completed: boolean }>`
  font-size: 15px;
  cursor: pointer;
  ${(props) => props.completed && 'text-decoration: line-through;'};
`;
const TodoListDeleteBtn = styled.button`
  &:hover {
    color: red;
  }
`;

const TodoListDeleteBtnSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: transparent;
`;
