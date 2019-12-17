import React from 'react';
import Header from './header';
import Footer from './footer';
import Article from './article';
import Background from './Background';

function App() {
    return (
        <div className="App">
            <Background />
            <Header />
            <Article />
            <Footer />
        </div>
    );
}

export default App;