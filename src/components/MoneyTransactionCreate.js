import React from 'react'
import { Button } from './Button'
import styles from './UserSignIn.module.css'

export const MoneyTransactionCreate = ({ users }) => {
  return (
    <div>
    <select className={`${styles.input}`}>
    {users.map((user) => {
      return (<option key={user.id} value={user.id}>{user.name}</option>)
    })}
    </select>
    <input type="number" className={`${styles.input}`}
        placeholder="Amount"
    />
    <Button>
        Create
    </Button>
    </div>
  )
}
