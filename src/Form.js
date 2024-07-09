import { useState } from "react";

function Form() {
  const [blog, setBlog] = useState({
    id: 12,
  });
  function handleChange(e) {
    console.log(e.target.value);
    setBlog({ ...blog, [e.target.name]: e.target.value });
    console.log(blog);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(blog);
  }
  return (
    <div className="Form">
      <form>
        <input type="text" onChange={handleChange} name="City" />
        <input type="text" onChange={handleChange} name="Course" />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;

