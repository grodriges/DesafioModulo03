import React, { useState, useEffect }from 'react';
import HeaderControl from './components/Header/Header';

export default function App() {

  const [initialCapital, setinitialCapital] = useState(0);
  const [monthlyInterestRate, setmonthlyInterestRate] = useState(0);
  const [period, setperiod] = useState(0);

  // render() {
    return (
    <div>
      <h1 className="center">React - Juros Compostos</h1>
      <HeaderControl
      initialCapital={initialCapital}
      monthlyInterestRate={monthlyInterestRate}
      period = {period}
      />
    </div>
    );
  

  
}
