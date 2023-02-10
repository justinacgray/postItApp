import React from 'react'
import '../css/Form.css'

const Form = ({ submitForm, closeModal }) => {


  return (
    <div className='modalBackground'>
      <form className="form-container" onSumbit={submitForm}>
        <button onClick={() =>closeModal(false)}>X</button>
        <div>
          <header>
            <h1>What would you like to post?</h1>
          </header>
          <section>
            <input type="text" name="" className="" placeholder="Title of Note" value="" />
            <input type="date" name="" className="" placeholder="" value="" />
          </section>

          <section>
          {/* <label htmlFor="isUrgent">Is this post urgent</label> */}
            <select name="isUrgent" id="">
              <option>Not Urgent</option>
              <option>Urgent</option>
            </select>

          {/* <label htmlFor="categoryType">What kind of post it this?</label> */}
            <select name="" id="">
              <option>Other</option>
              <option>Work</option>
              <option>Personal</option>
            </select>
          </section>

          <section>
          <textarea name="" className="" placeholder="What do you want to post?"></textarea>
          </section>

          <footer>
          <input type="submit" onClick={() =>closeModal(false)} value="Nevermind, cancel" />
          <input type="submit" value="Post it!" />
          </footer>
        </div>
      </form>


    </div>
  )
}

export default Form