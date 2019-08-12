import * as React from 'react';

type HeaderProps = {
  text?: string;
}

type HeaderState = {
  addText: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {

  static defaultProps: HeaderProps = {
    text: 'Welcome to React',
  };

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      addText: 'Header',
    }
  }

  public render() {
    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.text} {this.state.addText}</h1>
      </header>
    )
  }
}

export default Header;