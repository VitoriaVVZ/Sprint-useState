import { useState } from 'react';
import './style.css';

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [passo, setPasso] = useState(1);
  const [ultimoLote, setUltimoLote] = useState(0);

  
  function incrementar() {
    setContador(valorAnterior => valorAnterior + passo);
  }

  function decrementar() {
    setContador(valorAnterior => valorAnterior - passo);
  }

  function resetar() {
    if (contador > 0) {
      setUltimoLote(contador);
    }
    setContador(0);
  }

  function tratarPasso(e) {
    const valor = Number(e.target.value) || 1;
    
    if (valor < 1) {
      setPasso(1);
    } else if (valor > 10) {
      setPasso(10);
    } else {
      setPasso(valor);
    }
  }

  return (
    <div className="card-exemplo">
      <div className="card-header">
        <span className="badge">Módulo Operacional</span>
        <h3>Controle de Paletes - AutomaLog</h3>
      </div>

      <div className="contador-display">
        <span className="numero-contador">{contador}</span> / 50
      </div>

      {contador >= 40 && contador < 50 && (
        <div className="mensagem-alerta">Capacidade quase atingida</div>
      )}
      {contador === 50 && (
        <div className="mensagem-fechado">Lote Fechado</div>
      )}

      <div className="passo-container">
        <label htmlFor="passo-input">Passo do incremento: </label>
        <input 
          id="passo-input" 
          type="number" 
          min="1" 
          max="10"
          value={passo}
          onChange={tratarPasso}
        />
      </div>

      <div className="botoes-grupo">
        <button 
          className="btn btn-decrementar" 
          onClick={decrementar}
          disabled={contador === 0 || contador - passo < 0}
        >
          - {passo}
        </button>

        <button className="btn btn-resetar" onClick={resetar}>
          Zerar
        </button>

        <button 
          className="btn btn-incrementar" 
          onClick={incrementar}
          disabled={contador === 50 || contador + passo > 50}
        >
          + {passo}
        </button>
      </div>

      {ultimoLote > 0 && (
        <div className="explicacao-box">
          <p>Último lote finalizado: <strong>{ultimoLote} caixas</strong></p>
        </div>
      )}
    </div>
  );
}