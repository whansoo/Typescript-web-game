import React, { useCallback, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

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

const WordRelay = () => {
  const [word, setWord] = useState('선풍기');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      if(inputEl.current) {
        inputEl.current.focus();
      }
      
    } else {
      setResult('땡');
      setValue('');
      if(inputEl.current) {
        inputEl.current.focus();
      }
      
    }
  }, [word, value]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
   setValue(e.target.value)
  }, [])
console.log(value)
  return (
    <Wrap>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </Wrap>
  );
};

export default WordRelay;