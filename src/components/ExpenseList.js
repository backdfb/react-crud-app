import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdReplayCircleFilled } from 'react-icons/md'

const ExpenseList = (props) => {
  return (
    <>
    <ul className='list'>
            {props.initialExpenses.map((expense) => {
                return (
                    <ExpenseItem key={expense.id} 
                    expense={expense} 
                    handleDelete={props.handleDelete}
                    />
                )
            })}
        </ul>
        <button className='btn'>
            목록지우기
        </button>
    </>
  )
}

export default ExpenseList;
