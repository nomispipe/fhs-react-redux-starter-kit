import React from 'react'
import styles from './MoneyTransactionList.module.css'

export const MoneyTransactionList = ({ transactions }) => {
  return (

    <table>
    <tbody>
     {transactions.map((transaction) => {
       return (
            <tr key={transaction.user} className={`${styles.tr}`}>
                <td>{transaction.user}</td>
                <td>{transaction.amount} €</td>
            </tr>
       )
     })}
    </tbody>
    </table>

  )
}
