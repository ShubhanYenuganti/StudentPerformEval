import React, { useState } from 'react';
import api from '../api/api';

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
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Create Class</button>
    </form>
  );
}

export default CreateClassForm;
