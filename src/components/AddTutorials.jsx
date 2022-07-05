import React, { useState } from "react";

const AddTutorials = ({addTutorial}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    addTutorial({title : title , description: desc})
    setTitle("");
    setDesc("");
  }
  
  return (
    <div className="container text-center mt-4">
      <h1 className="display-4 text-center m-4">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorials;
