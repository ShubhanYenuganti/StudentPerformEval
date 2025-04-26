import React, { useState } from 'react';
import api from '../api/api';

function FileUpload({ classId }) {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('homework');

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);
    formData.append('class_id', classId);

    await api.post('/upload_file', formData);
    alert('File uploaded and insights updated!');
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="homework">Homework</option>
        <option value="quiz">Quiz</option>
        <option value="test">Test</option>
      </select>
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;
