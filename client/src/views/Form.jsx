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
      <form className="form-container" onSumbit={submitForm}>
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
            <select name="isUrgent" id="" value={note.isUrgent} onChange={handleInputChange} >
              <option>Not Urgent</option>
              <option>Urgent</option>
            </select>

          {/* <label htmlFor="categoryType">What kind of post it this?</label> */}
            <select name="categoryType" id="" value={note.categoryType} onChange={handleInputChange} >
              <option>Other</option>
              <option>Work</option>
              <option>Personal</option>
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