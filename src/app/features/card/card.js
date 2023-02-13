import Card from 'react-bootstrap/Card';


function BgColorExample() {
  return (
    <>
            {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{props.id}</Card.Header>
          <Card.Body>
            <Card.Title>{props.title} </Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;