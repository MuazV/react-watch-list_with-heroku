import React, { useState } from "react";

const AddTutorial = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTutorial({ title: title, description: desc });
      setTitle('');
      setDesc('');
    };

  return (
    <div className="container text-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder= "Enter your title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Your Decription"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
