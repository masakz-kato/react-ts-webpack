import * as React from 'react';

type FooterProps = {
  text?: string;
}

type FooterState = {
  date: Date;
}

class Footer extends React.Component<FooterProps, FooterState> {

  static defaultProps: FooterProps = {
    text: 'Footer',
  };

  constructor(props: FooterProps) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  public render() {
    return (
      <footer className="App-footer">
        <p>{this.props.text} {this.state.date}</p>
      </footer>
    )
  }
}

export default Footer;