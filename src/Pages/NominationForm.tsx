import { useState } from 'react';
import { postStudent } from '../api';
import { Student } from '../constants';



const NominationForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [code, setCode] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const student: Student = { name, image, code, batch, vote: 0,id:Date.now()};
    await postStudent(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="image">Image URL:</label>
      <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
      <br />
      <label htmlFor="code">Student Code:</label>
      <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} />
      <br />
      <label htmlFor="batch">Batch:</label>
      <input type="text" id="batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
      <br />
      <button type="submit">Nominate</button>
    </form>
  );
};

export default NominationForm;
