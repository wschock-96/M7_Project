import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CharacterForm from '../components/CharacterForm';

const CreateCharacter = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleCreate = (formData) => {
        setLoading(true);
        fetch('/api/characters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then((res) => {
            if (!res.ok) throw new Error('Failed to create character.');
            return res.json();
        })
        .then(() => {
            setLoading(false);
            navigate('/characters');
        })
        .catch((err) => {
            setLoading(false);
            setError(err.message);
        });
    };
  
    return (
        <Container className="mt-4">
            <h2>Create New Character</h2>
            <CharacterForm
                onSubmit={handleCreate}
                loading={loading}
                error={error}
            />
        </Container>
    );
  };
  
  export default CreateCharacter;
// const
// ::contentReference[oaicite:43]{index=43}
 
