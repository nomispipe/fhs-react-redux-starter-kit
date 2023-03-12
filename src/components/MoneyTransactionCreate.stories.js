import React from 'react'
import { storiesOf } from '@storybook/react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'

storiesOf('MoneyTransactionCreate', module)
  .add('MoneyTransactionCreate', () => (
    <MoneyTransactionCreate users={[
      {
        id: 1,
        name: 'Simon'
      },
      {
        id: 2,
        name: 'Simon 2'
      }
    ]
    }/>
  ))
