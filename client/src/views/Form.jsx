import React from 'react'
import '../css/Form.css'

const Form = ({ submitForm }) => {


  return (
    <div>
      <form class="form-container" onSumbit={submitForm}>
        <ul>
          <li>
            <input type="text" name="" class="" placeholder="Title of Note" value="" />
            <input type="date" name="" class="" placeholder="" value= "" />
          </li>
          <li>
            <select name="" id="">
              <option>a</option>
              <option>Urgent</option>
              <option>Not Urgent</option>
            </select>
            <select name="" id="">
              <option>b</option>
              <option>Personal</option>
              <option>Other</option>
            </select>
          </li>
          <li>
            <textarea name="" class="" placeholder="What do you want to post?"></textarea>
          </li>
          <li>
            <input type="submit" value="Post it!" />
          </li>
        </ul>
      </form>


    </div>
  )
}

export default Form