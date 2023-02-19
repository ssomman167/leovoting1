

import { useState, useEffect } from 'react';
import { Student } from '../constants';
import { getTopThree } from '../api';

const ResultPage = () => {
  const [topThree, setTopThree] = useState<Student[]>([]);

  useEffect(() => {
    const fetchTopThree = async () => {
      const data = await getTopThree();
      setTopThree(data);
    };
    fetchTopThree();
  }, []);


  return (
    <div>
      <h2>Results:</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ border: '1px solid gray', padding: '1rem', width: '30%' }}>
          <h3>Winner</h3>
          {topThree.length > 0 && (
            <>
              <img src={topThree[0].image} alt={topThree[0].name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <p>{topThree[0].name}</p>
              <p>{topThree[0].code}</p>
              <p>{topThree[0].batch}</p>
              <p>Votes: {topThree[0].vote}</p>
            </>
          )}
        </div>
        <div style={{ border: '1px solid gray', padding: '1rem', width: '30%' }}>
          <h3>Runner Up</h3>
          {topThree.length > 1 && (
            <>
              <img src={topThree[1].image} alt={topThree[1].name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <p>{topThree[1].name}</p>
              <p>{topThree[1].code}</p>
              <p>{topThree[1].batch}</p>
              <p>Votes: {topThree[1].vote}</p>
            </>
          )}
        </div>
        <div style={{ border: '1px solid gray', padding: '1rem', width: '30%' }}>
          <h3>Third Position</h3>
          {topThree.length > 2 && (
            <>
              <img src={topThree[2].image} alt={topThree[2].name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <p>{topThree[2].name}</p>
              <p>{topThree[2].code}</p>
              <p>{topThree[2].batch}</p>
              <p>Votes: {topThree[2].vote}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
