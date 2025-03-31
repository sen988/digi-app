import React, { useState} from 'react';

const DiaryEntry = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
      });

      const [file, setFile] = useState(null);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const data = new FormData();
            data.append('title', formData.title);
            data.append('content', formData.content);
            if (file) {
                data.append('image', file);
            }

      
          const response = await fetch('http://localhost:5000/api/diary-entries/create-entry', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: data,
          });

          if (!response.ok) {
            throw new Error('Failed to save diary entry');
          }

          const result = await response.json();
          console.log('Diary entry saved:', result);
          alert('Diary entry saved successfully!');
          setFormData({ title: '', content: '' });
          setFile(null);
        } catch (error) {
          console.error('Error saving diary entry:', error);
          alert('Failed to save diary entry');
        }
      };
    
      return (
        <div>
          <h1>Diary Entry Page</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Content:</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Upload Photo:</label>
              <input type="file" onChange={handleFileChange} accept="image/" />
            </div>
            <button type="submit">Save Entry</button>
          </form>
        </div>
      );

  };
  
export default DiaryEntry;