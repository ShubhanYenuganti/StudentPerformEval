import React, { useState } from 'react';
import api from '../api/api';
import '../styles/CreateClassForm.css'; // ← import CSS file

function CreateClassForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objectives, setObjectives] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/create_class', { title, description, objectives });
    alert('Class created!');
  };

  return (
    <form className="create-class-form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add Class</button>
    </form>
  );
}

export default CreateClassForm;
