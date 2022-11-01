import './App.css';
import Body from './components/Home/Body/Body';
import Navigation from './components/Home/Header/Navbar';
import { useEffect } from 'react';
import webFont from 'webfontloader';

function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    })
  }, [])
  return (
    <div className="App">
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
