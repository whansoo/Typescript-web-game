import React, { FunctionComponent, memo } from 'react';
import { TryInfo } from './types';

const Try: FunctionComponent<{ tryInfo: TryInfo}> = memo(({tryInfo}) => { //부모컴포넌트가 리렌더링 되었을 때 자식 컴포넌트가 리렌더링 되는걸 막아준다.부모컴포넌트가 리렌더링 되었을 때 자식컴포넌트가 리렌더링 되는 것만 막아줌.
  return (                         //state나 props가 바꼈을 때는 여전히 리렌더링이 잘된다.
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
Try.displayName = 'Try';
export default Try;