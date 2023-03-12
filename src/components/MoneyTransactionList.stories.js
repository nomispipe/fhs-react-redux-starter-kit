import React from 'react'
import { storiesOf } from '@storybook/react'
import { MoneyTransactionList } from './MoneyTransactionList'

storiesOf('MoneyTransactionList', module)
  .add('MoneyTransactionList', () => (
    <MoneyTransactionList transactions={[
      {
        user: 'Simon',
        amount: 12.5
      },
      {
        user: 'Simon 2',
        amount: 1223.2
      }
    ]
    }/>
  ))
