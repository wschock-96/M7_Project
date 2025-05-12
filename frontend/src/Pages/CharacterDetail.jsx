import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';

const CharacterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`/api/characters/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data);
                setLoading(false);
            })
        .catch(() => {
            setError('Failed to load character.');
            setLoading(false);
        });
    }, [id]);

    const handleDelete = () => {
        fetch(`/api/characters/${id}`, { method: 'DELETE' })
            .then(() => navigate('/characters'))
            .catch(() => setError('Failed to delete character.'));
    };

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;
    if (!character) return null;

    return (
        <Container className="mt-4">
            <Card bg="dark" text="white">
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>Alias: {character.alias}</Card.Text>
                    <Card.Text>Superpower: {character.superpower}</Card.Text>
                    <Card.Text>Affiliation: {character.affiliation}</Card.Text>
                    <Button variant="danger" onClick={() => navigate(`/edit/${id}`)} className="me-2">
                        Edit
                    </Button>
                    <Button variant="secondary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CharacterDetail;
