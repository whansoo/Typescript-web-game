import { useState } from "react"
import { useRef } from "react"


const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9))
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9))
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [total, setTotal] = useState('');
    const inputEl = useRef(null);


    const onSubmit = (e) =>  {
      e.preventDefault();
      if(parseInt(value) === first * second) {
        setResult('정답입니다!');
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        inputEl.current.focus();
      }else {
        setResult('틀렸습니다');
        setValue('');
        inputEl.current.focus();
      }
    }
  
    const onClick = (e) => {
      setTotal(first * second);
    }

    return(
        <>
          <div>{first} 곱하기 {second}는?</div>
          <form onSubmit={onSubmit}>
            <input ref={inputEl} type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button>입력!</button>
          </form>     
         <div>{result}</div>
          <button onClick={onClick}>정답보기</button>
          <div>{total}</div>
        </>
      )

}

export default GuGuDan; 