import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => (
  <Card className="mb-3" bg="dark" text="white">
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
      <Card.Text>{character.alias}</Card.Text>
      <Link to={`/characters/${character.id}`}>
        <Button variant="danger">View Details</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default CharacterCard;