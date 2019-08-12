import * as React from 'react';

// Introのpropsのtype aliasを定義
type MainProps = {
  text: string;
  children: any;
}

// React.FC型を用いる
// ジェネリクスにIntroPropsを指定
const Main: React.FC<MainProps> = props => {
  return (
    <>
      <h2>{props.text}</h2>
      <p className="App-intro">
        {props.children}
      </p>
    </>
  )
}

export default Main;