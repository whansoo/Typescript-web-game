import React, {useRef, useState, useCallback, ReactText} from 'react';
import Try from './Try';
import styled from 'styled-components';
import { TryInfo } from './types';

const Wrap = styled.main`
  flex-direction: column;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 100vw;
  height: 100%;
  min-height: 600px;
  max-width: 460px;
  max-height: 896px;
  background-color: #F0EBE1;
`;
//숫자 랜덤으로 4개 무작위 뽑기 나는 빈배열에 무작위 숫자를 뽑아서 집어 넣을 생각을 했는데 여기서는 하나를 제거해서 남은 숫자에 [0]을 뽑아 배열에 넣는 방식
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //index 0부터 8까지임
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; //원래 하나 제거하면 8개의 숫자가 남고 거기에서 첫번째 인덱스 숫자를 빈배열에 넣는다 물론 제거한 숫자가 있어서 중복이 발생 x
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers); //ex) [2,4,6,8] lazy init getNumbers()은 렌더링 될때마다 함수를 호출한다 따라서 한번만 호출하려고 하면 getNumbers만 작성 그러면 첨에 return값만 렌더링 된다.
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState<TryInfo[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setTries((t) => ([
        ...t,           //배열에서 푸쉬 사용금지 react에서 기존 배열에 있는 값이랑 현재 바뀐 값이랑 비교하여 렌더링 해야 하는데 원본에다가 수정,추가,삭제하면 인식을 못한다. 즉 불변성을 유지해야한다. 
        {
          try: value,
          result: '홈런!',
        }
      ]));
      setResult('홈런!');
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      if(inputEl.current) {
        inputEl.current.focus();
      }
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        if(inputEl.current) {
            inputEl.current.focus();
          }
      } else {
        console.log('답은', answer.join(''));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            console.log('strike', answerArray[i], answer[i]);
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
            ball += 1;
          }
        }
        setTries(t => ([
          ...t,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          }
        ]));
        setValue('');
        if(inputEl.current) {
            inputEl.current.focus();
          }
      }
    }
  }, [value, answer]);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);

  return (
    <Wrap>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>시도: {tries.length}</div> 
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v}/> //리액트에서 map은 key를 보고 같은 컴포넌트인지 아닌지 판단.그래서 key를 고유한 값으로 지정하기
          //react에서 key를 기준으로 엘리먼트를 추가 하거나 수정 삭제 판단하기 때문에 배열의 순서가 바뀌면 문제가 생긴다.
        ))}                                               
      </ul>
    </Wrap>
  );
};

export default NumberBaseball;