import React from 'react'
import '../css/Form.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const Form = ({ submitForm, closeModal }) => {

  const schema = yup.object().shape({
    title: yup.string().min(4, 'Title must be at least 4 characters').max(20, 'Title must be at least 20 characters').required(),
    text: yup.string().min(10, 'Minimum text requirement is 10 characters').max(255, "Text can't be greater than 255 characters").required(),
    dueDate: yup.date().required(),
  })
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  

  return (
    <div className='modal-container'>
      <form className="inner-modal-container" onSubmit={handleSubmit(submitForm)}>
        <section className="modal-header">
          <h2>Create a Post</h2>
          <button onClick={() => closeModal(false)}>X</button>
        </section>
        <main className='modal-body'>
          <p>{errors.title ? errors.title.message : null} </p>
          <input name="title" type="text" placeholder="Title of Note" {...register("title", { required: true })}  />

          <p>{errors.dueDate ? errors.dueDate.message : null} </p>
          <input name="dueDate" type="date" placeholder="Due Date" {...register("dueDate", { required: true})}  />

          <label htmlFor="isUrgent">Is this post urgent</label>
          <input type="checkbox" placeholder="Urgent?" {...register("isUrgent")} />

          <label htmlFor='categoryType' >Category</label>
          <select name="categoryType" {...register("categoryType")} >
            <option value="other">Other</option>
            <option value="work"> Work</option>
            <option value="personal">  Personal</option>
          </select>

          <p>{errors.text ? errors.text.message : null} </p>
          <textarea {...register("text", {})} />
        </main>

        <section className="modal-footer">
          <input className="btn btn-primary" type="submit" value="Post it!" />
        </section>
      </form>
    </div>
  )
}

export default Form