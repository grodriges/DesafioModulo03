import React from 'react';
import css from './results.module.css'

function Result({month, totalAmount, period, rendimentoMensal, juros}) {
    
    return(
        <div  className={`${css.border} ${css.results}`}>
            <ul>
                <li key={period}>                
                <p>R${totalAmount}</p>
                <p><strong className={css.month} scope='row'>{month}</strong>R${rendimentoMensal}</p>
                <p>{juros}</p>
                </li>
            </ul>
        </div>
    )
}

export default Result;