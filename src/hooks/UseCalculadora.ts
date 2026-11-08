
import { useState } from 'react';

export function useCalculadora() {
  const [formula, setFormula] = useState('0');
  const [resultado, setResultado] = useState('0');
  const [isScientific, setIsScientific] = useState(false);
  const [terminado, setTerminado] = useState(false);

  const calcular = (texto: string): string => {
    try {
      const expresion = texto
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/\^2/g, '**2');

      const valor = Function(
        '"use strict"; return (' + expresion + ')'
      )();

      return Number.isFinite(valor)
        ? String(Number(valor.toFixed(8)))
        : 'Error';
    } catch {
      return '';
    }
  };

  const manejarPresion = (text: string) => {
    if (text === 'sci') {
      setIsScientific(prev => !prev);
      return;
    }

    if (text === 'C') {
      setFormula('0');
      setResultado('0');
      setTerminado(false);
      return;
    }

    if (text === '=') {
      const valor = calcular(formula);

      if (valor !== '' && valor !== 'Error') {
        setFormula(valor);
        setResultado('0');
        setTerminado(true);
      } else {
        setResultado('Error');
      }
      return;
    }

    if (text === '⌫') {
      setTerminado(false);
      setFormula(prev => {
        const nueva = prev.length > 1 ? prev.slice(0, -1) : '0';
        setResultado(calcular(nueva));
        return nueva;
      });
      return;
    }

    setFormula(prev => {
      const nueva = terminado || prev === '0'
        ? text
        : prev + text;

      setResultado(calcular(nueva));
      return nueva;
    });

    setTerminado(false);
  };

  return {
    formula,
    resultado,
    isScientific,
    manejarPresion,
  };
}
