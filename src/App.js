import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UserSection from './components/UserSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true, 
      theme: 'white' };
  }

  setIsVisible = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <div>
        <Header />
        <UserSection />
        <Footer />
      </div>
    );
  }
}

export default App;
