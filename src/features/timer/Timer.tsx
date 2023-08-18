import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

interface Time {
  year: string;
  month: string;
  day: string;
  weekday: string;
}

const getCurrentTime = () => {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const weekday = date.toString().slice(0, 3);

  return { year, month, day, weekday };
};

export const Timer = () => {
  const [currentTime, setCurrentTime] = useState<Time>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // unmount 될 때 실행되는 콜백 함수
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useLayoutEffect(() => {
    setCurrentTime(getCurrentTime());
  }, []);

  const conditionalRender = () => {
    if (!currentTime) return null;

    return (
      <>
        <DateBox>
          <DateDay>{currentTime.day}</DateDay>
          <DateMonthYear>
            <div>{currentTime.month}</div>
            <div>{currentTime.year}</div>
          </DateMonthYear>
        </DateBox>

        <WeekdayBox>{currentTime.weekday}</WeekdayBox>
      </>
    );
  };

  return <DateWrapper>{conditionalRender()}</DateWrapper>;
};

const DateWrapper = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DateDay = styled.div`
  font-size: 25px;
  margin-right: 5px;
`;

const DateMonthYear = styled.div``;

const WeekdayBox = styled.div`
  font-size: 15px;
`;
