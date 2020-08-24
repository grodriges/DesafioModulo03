import React, { useState, useEffect } from 'react';
import css from "./header.module.css"
import Results from '../Results/Results';
import Result from '../Results/Result';

export default function HeaderControl({ initialCapital, monthlyInterestRate, period }) {

  const [initialCapitalCurrent, setinitialCapitalCurrent] = useState(initialCapital);
  const [monthlyInterestRateCurrent, setmonthlyInterestRateCurrent] = useState(monthlyInterestRate);
  const [periodCurrent, setperiodCurrent] = useState(period);
  const[result, setResult] = useState([]);

  let Data = [];
  
    const CalcValores = () => {
        const capitalInicial  = Number(initialCapitalCurrent) || 0;
        const rate    = Number(monthlyInterestRateCurrent) || 0;
        const period  = Number(periodCurrent) || 0;
  

        let totalAmount = 0;
        let RendimentoMensal = 0;
        let valorMensal = 0;
        let Juros = 0;
        let taxaJurosPorcentagem = rate / 100;

    if(period > 0 && rate > 0 && capitalInicial > 0){
        for (let i = 1 ; i <= period ; i++) {
  
          totalAmount = capitalInicial * ((1 + taxaJurosPorcentagem)**i);
          console.log(totalAmount);
          valorMensal = totalAmount - capitalInicial;
          RendimentoMensal = totalAmount - capitalInicial;
          Juros = (RendimentoMensal / capitalInicial) * 100;

        result.push({ month: i, totalAmount: totalAmount.toFixed(2), valorMensal: valorMensal.toFixed(2), rendimentoMensal: RendimentoMensal.toFixed(2), Juros: Juros.toFixed(2)});
        };
      };
    }

    useEffect(() => {
        return () => {
            setResult(result);
        }
      },[]);


      const handleInitialCapital = (event) => {
        setinitialCapitalCurrent(event.target.value);
        CalcValores();
      };
    const handlemonthlyInterestRateCurrent = (event) =>{
        setmonthlyInterestRateCurrent(event.target.value);
        CalcValores();
    };
    const handleperiodCurrent = (event) => {
        setperiodCurrent(event.target.value);
        CalcValores()
    };
    
    return(
        <div className={css.flexRow}>
            <div className="input-field">
                <input  id="Montante_Inicial" type="number"  value={initialCapitalCurrent} onChange={handleInitialCapital} />
                <label className="active"  htmlFor="Montante_Inicial">Montante Inicial</label>
            </div>
            <div className="input-field">
                <input id="Taxa_Juros_Mensal" type="number" value={monthlyInterestRateCurrent} onChange={handlemonthlyInterestRateCurrent}  />
                <label className="active"  htmlFor="Taxa_Juros_Mensal">Taxa de Juros Mensal</label>
            </div>

            <div className="input-field">
                <input id="Periodo" type="number" value={periodCurrent} onChange={handleperiodCurrent}  />
                <label className="active"  htmlFor="Periodo">Periodo (meses)</label>
            </div>   

            <Results results={result} />     
        </div>
    )
}