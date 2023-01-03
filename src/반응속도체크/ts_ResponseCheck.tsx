import { time } from 'console';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import { ScrollRestoration } from 'react-router-dom';

          

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState<number[]>([]); //빈배열일 때 never가 되기 때문에 타입을 붙여 줘야한다.
  const timeout = useRef<number | null>(null); //타입이 오버로딩이 되어서 3가지 경우가 있는데 read only타입 말고 다른것을 타입 지정해야 한다.
  const startTime = useRef(0); //useRef는 값이 바껴도 화면이 리렌더링이 되지 않는다.state는 리렌더링이 됨.
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      timeout.current = window.setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
    } 

    else if (state === 'ready') { // 성급하게 클릭
      
      if(timeout.current) {
        clearTimeout(timeout.current);  //timeout이 null일수가 있어서.! 붙이던가 if사용하기
      }
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } 

    else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date().getTime();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => { //매개변수가 없어서 타이핑 할 필요가 없다.
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0
      ? null
      : <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
  };

  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;