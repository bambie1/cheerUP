import React from "react";

export const QuoteContext = React.createContext();

export class QuoteProvider extends React.Component {
  state = {
    category: {},
  };

  setCategory = (category) => {
    this.setState((prevState) => ({ category }));
  };

  render() {
    const { children } = this.props;
    const { category } = this.state;
    const { setCategory } = this;

    return (
      <QuoteContext.Provider value={{ category, setCategory }}>
        {children}
      </QuoteContext.Provider>
    );
  }
}
