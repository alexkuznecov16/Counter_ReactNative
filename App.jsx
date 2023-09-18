import React, { useState } from 'react';
import { View } from 'react-native';
import CounterDisplay from './Components/CounterDisplay.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';

function App() {
    const [number, setNumber] = useState(0);

    const decreaseNumber = () => {
        setNumber(number - 1);
    };

    const increaseNumber = () => {
        setNumber(number + 1);
    };
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
            }}
        >
            <Header />
            <View
                style={{
                    width: '100%',
                    height: 'calc(100vh - 150px)',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                }}
            >
                <CounterDisplay decreaseNumber={decreaseNumber} increaseNumber={increaseNumber} number={number} />
            </View>
            <Footer />
        </View>
    );
}

export default App;
