import React from 'react'
import { Button } from './Button'
import styles from './UserSignIn.module.css'

export const UserSignUp = () => {
  return (
  <form className={`${styles.form}`}>
    <input type="text" className={`${styles.input}`}
        placeholder="Username"
    />
    <input type="password" className={`${styles.input}`}
        placeholder="Password"
    />

    <input type="password" className={`${styles.input}`}
        placeholder="Repeat Password"
    />
    <Button>
        Sign Up
    </Button>
  </form>
  )
}
