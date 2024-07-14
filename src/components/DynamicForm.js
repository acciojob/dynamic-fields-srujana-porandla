import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  const handleAddField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_,i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="dynamic-form">
        {fields.map((field, index) => (
          <div key={index} className="field-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(event) => handleChange(index, event)}
            />
            <button type="button" onClick={() => handleRemoveField(index)} className="remove-button">
              Remove
            </button>
          </div>
        ))}
        <div className="buttons">
          <button type="button" onClick={handleAddField} className="add-button">
            Add More...
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
