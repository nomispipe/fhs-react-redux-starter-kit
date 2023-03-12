import React from 'react'
import { Button } from './Button'
import styles from './UserSignIn.module.css'

export const UserSignIn = () => {
  return (
  <form className={`${styles.form}`}>
    <input type="text" className={`${styles.input}`}
        placeholder="Username"
    />
    <input type="password" className={`${styles.input}`}
        placeholder="Password"
    />
    <Button>
        Sign In
    </Button>
  </form>
  )
}
