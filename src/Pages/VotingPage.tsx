import { useState, useEffect } from 'react';
import { getStudents, updateStudent } from '../api';
import { Student } from '../constants';



const VotingPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [change,setChange]=useState(false)
  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, [change]);

  const handleVote = async (id:number) => {
    const updatedStudents = students.forEach((student) => {
      if (student.id === id) {     
        let stud={...student, vote: student.vote + 1}
          updateStudent(stud).then((res)=>{
            console.log(res,stud)
            setChange((prev)=>!prev)
          })
      }
    });
    
    
  };

  return (
    <div>
      <h2>List of Nominated Students:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {students.map((student) => (
          <div key={student.id} style={{ border: '1px solid gray', padding: '1rem' }}>
            <h3>{student.name}</h3>
            <img src={student.image} alt={student.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <p>{student.code}</p>
            <p>{student.batch}</p>
            <p>Votes: {student.vote}</p>
        <button type="button" onClick={() => handleVote(student.id)}>Vote</button>
      </div>
    ))}
  </div>
</div>
  )
        }

    export default VotingPage
