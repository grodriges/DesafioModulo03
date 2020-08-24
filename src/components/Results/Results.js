import React from 'react';
import css from './results.module.css'
import Result from './Result'


function Results({results}) {
    return(
        <div className={`${css.border} ${css.flexRow}`}>
                { results.map((row, i) => {
                    return <Result month={row.month} totalAmount={row.totalAmount} period={i} rendimentoMensal={row.rendimentoMensal} juros={row.Juros} />
                })}
        </div>
    )
}

export default Results;