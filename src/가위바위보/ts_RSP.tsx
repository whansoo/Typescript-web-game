import React, { useState, useRef, useEffect } from 'react';

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
} as const;

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const;


type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
const computerChoice = (imgCoord: ImgCoords) => {
  return (Object.keys(rspCoords) as ['바위','가위','보']).find((k) => {
    return rspCoords[k] === imgCoord;
  })!;
};

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef<number>();

  useEffect(() => { // componentDidMount(컴포넌트가 첫 렌더링된 후,비동기 요청을 많이함), componentDidUpdate 역할(1대1 대응은 아님)
    console.log('다시 실행');
    interval.current = window.setInterval(changeHand, 100); //setInterval은 0.1초마다 반복 작업을 해준다. 
    return () => { // componentWillUnmount 역할
      console.log('종료');
      clearInterval(interval.current); // 종료직전 Interval을 없애준다 지우지 않으면 계속 쌓이게 됨. 메모리를 계속 잡아먹음
    }
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice: keyof typeof rspCoords) => () => {
    if (interval.current) {
      clearInterval(interval.current);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = window.setInterval(changeHand, 100);
      }, 1000);
    }
  };

  return (
    <>
    <div id="rspcontainer">
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
      <div id="rspbutton">
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div id="result">{result}</div>
      <div id="score">현재 {score}점</div>
      </div>
    </>
  );
};

export default RSP;