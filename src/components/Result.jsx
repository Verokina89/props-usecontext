import React from 'react';
import { Link } from 'react-router-dom';
import { useCalculator } from './CalculatorProvider';

const Result = () => {
  const { numbers, result, resetCalculator } = useCalculator();

  return (
    <div className="result">
      <h2>Resultado</h2>
      <p>Números seleccionados: {numbers.join(', ')}</p>
      <p>Suma total: {result}</p>
      <button onClick={resetCalculator}>Resetear</button>
      <Link to="/">Volver a la calculadora</Link>
    </div>
  );
};

export default Result;
