import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/styles/App.css'
const App = () => {
    
    return (
        <div className="app">
            <Header darkMode='dark'/>
            <div class="cards">
                <Card darkMode='dark'/>
            </div>
            <Footer/>
        </div>

    );
}

export default App;