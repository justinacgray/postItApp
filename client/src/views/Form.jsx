import React from 'react'
import '../css/Form.css'

const Form = ({ submitForm, closeModal, setNote, note }) => {
  
  const handleInputChange = (e) => {
    setNote ({
      // making a copy of user (spread operator)
      ...note,
      // adding a key based on the e.target.name
      [e.target.name] : e.target.value,
    })
  }




  return (
    <div className='modalBackground'>
      <form className="form-container" onSubmit={submitForm}>
        <button onClick={() =>closeModal(false)}>X</button>
        <div>
          <header>
            <h1>What would you like to post?</h1>
          </header>
          <section>
            <input type="text" name="title" className="" placeholder="Title of Note" value={note.title} onChange={handleInputChange} />
            <input type="date" name="dueDate" className="" placeholder="" value={note.dueDate} onChange={handleInputChange} />
          </section>

          <section>
          {/* <label htmlFor="isUrgent">Is this post urgent</label> */}
            <select name="isUrgent" id="isUrgent" value={note.isUrgent} onChange={handleInputChange} >
              <option>Please Choose One</option>
              <option value='false'>Not Urgent</option>
              <option value='true'>Urgent</option>
            </select>

          {/* <label htmlFor="categoryType">What kind of post it this?</label> */}
            <select name="categoryType" id="categoryType" value={note.categoryType} onChange={handleInputChange} >
            <option>Please Choose One</option>
              <option value='other'>Other</option>
              <option value='work'>Work</option>
              <option value='personal'>Personal</option>
            </select>
          </section>

          <section>
          <textarea name="text" className="" value={note.text} placeholder="What do you want to post?" onChange={handleInputChange} ></textarea>
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