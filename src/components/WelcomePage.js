import React, { useState } from 'react';

function WelcomePage({ userDetails }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = () => {
    let res;
    switch (userDetails.operator) {
      case 'Addition':
        res = num1 + num2;
        break;
      case 'Subtraction':
        res = num1 - num2;
        break;
      case 'Multiplication':
        res = num1 * num2;
        break;
      default:
        res = 'Invalid operator';
    }
    setResult(res);
  };

  return (
    <div className="welcome-container">
      <h2>You have registered for {userDetails.operator}</h2>
      <h3>Welcome, {userDetails.name}!</h3>

      <div>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(parseFloat(e.target.value))}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(parseFloat(e.target.value))}
        />
        <button onClick={calculate}>Calculate</button>
      </div>

      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default WelcomePage;
