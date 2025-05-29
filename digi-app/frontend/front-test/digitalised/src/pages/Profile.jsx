import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    const [entries, setEntries] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const fetchUserEntries = async () => {
        try {
        const token = localStorage.getItem('token'); 

        const response = await fetch('http://localhost:5000/api/diary-entries/user', {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${token}`, 
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user entries');
        }

        const data = await response.json();
        setEntries(data);
        console.log('User entries fetched:', data);
        } catch (error) {
        console.error('Error fetching user entries:', error);
        setError('Failed to load diary entries');
        } finally {
        setLoading(false); 
        }
    };

    useEffect(() => {
        fetchUserEntries();
    }, []);

    return (
        <div>
          <h1>User Profile</h1>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && entries.length === 0 && <p>No diary entries found.</p>}
          <ul>
            {entries.map((entry) => (
              <li key={entry.id}>
                <h3>{entry.title}</h3>
                <p>{entry.content}</p>
                {entry.imageUrl && <img src={`http://localhost:5000${entry.imageUrl}`} alt={entry.title} style={{ maxWidth: '200px' }} />}
                <Link to={`/diary-entries/${entry.id}`}>View Entry</Link>
              </li>
            ))}
          </ul>
        </div>
      );
}



export default Profile;