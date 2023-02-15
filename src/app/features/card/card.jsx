import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Tarjetita(props) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">{props.id}</Button>
      </Card.Body>
    </Card>
  );
}

