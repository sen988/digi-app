import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewEntry() {
    const { id } = useParams(); 
    const [entry, setEntry] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    const fetchEntry = async () => {
        try {
        const token = localStorage.getItem('token'); 

        const response = await fetch(`http://localhost:5000/api/diary-entries/${id}`, {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${token}`, 
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch diary entry');
        }

        const data = await response.json();
        setEntry(data);
        console.log('Diary entry fetched:', data);
        } catch (error) {
        console.error('Error fetching diary entry:', error);
        setError('Failed to load diary entry');
        } finally {
        setLoading(false); 
        }
    };

    useEffect(() => {
        fetchEntry();
      }, [id]);
    
      return (
        <div>
          <h1>View Diary Entry</h1>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {entry && (
            <div>
              <h2>{entry.title}</h2>
              <p>{entry.content}</p>
              {entry.imageUrl && <img src={`http://localhost:5000${entry.imageUrl}`} alt={entry.title} style={{ maxWidth: '400px' }} />}
            </div>
          )}
        </div>
      );
}

export default ViewEntry;