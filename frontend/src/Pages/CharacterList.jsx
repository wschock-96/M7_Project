import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/characters')
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data);
                setLoading(false);
        })
        .catch(() => {
            setError('Failed to load characters.');
            setLoading(false);
        });
    }, []);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <Container className="mt-4">
            <Row>
                {characters.map((char) => (
                <Col md={4} key={char.id}>
                    <CharacterCard character={char} />
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CharactersList;
