import { useState, useEffect } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

const CharacterForm = ({ initialData = {}, onSubmit, loading, error }) => {
    const [formData, setFormData] = useState({
        name: '',
        alias: '',
        superpower: '',
        affiliation: '',
        ...initialData,
    });
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        return;
    }
    setValidated(true);
    onSubmit(formData);
  };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter character name"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a name.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formAlias" className="mb-3">
                <Form.Label>Alias</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="alias"
                    value={formData.alias}
                    onChange={handleChange}
                    placeholder="Enter character alias"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide an alias.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formSuperpower" className="mb-3">
                <Form.Label>Superpower</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="superpower"
                    value={formData.superpower}
                    onChange={handleChange}
                    placeholder="Enter superpower"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a superpower.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formAffiliation" className="mb-3">
                <Form.Label>Affiliation</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="affiliation"
                    value={formData.affiliation}
                    onChange={handleChange}
                    placeholder="Enter affiliation"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide an affiliation.
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="danger" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
        </Form>
    );
};

export default CharacterForm;
