import React from 'react'
import { useForm } from 'react-hook-form'

const FilterPrice = ({ setFromTo }) => {

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    setFromTo(data)
    reset({
      from : '',
      to: ''
    })
  }

  return (
    <article>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)} >
        <div>
          <label htmlFor="from">From</label>
          <input {...register('from')} type="number" id='from' />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input {...register('to')} type="number" id='to' />
        </div>
        <button>Filter Price</button>
      </form>
    </article>
  )
}

export default FilterPrice