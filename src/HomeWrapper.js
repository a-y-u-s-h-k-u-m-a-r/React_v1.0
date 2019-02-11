import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import './App.css';


const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/persons'>Persons</NavLink></li>
        <li><NavLink to='/planets'>Planets</NavLink></li>
      </ul>
    </nav>
  );

  const Home = () => (
    <div className='home'>
      <h1>Welcome to my portfolio website</h1>
      <p> Feel free to browse around and learn more about me.</p>
    </div>
  );

  const About = () => (
    <div className='about'>
      <h1>About Me</h1>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
  );

  const Contact = () => (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
  );
  const Main = () => (
      <>
        <Route path='/' component={Home}></Route>
        <Route path='/persons' component={About}></Route>
        <Route path='/planets' component={Contact}></Route>
        </>
        );
class HomeWrapper extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className="App">
      <h1>Star Wars Api</h1>
        <Navigation />
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default HomeWrapper;
