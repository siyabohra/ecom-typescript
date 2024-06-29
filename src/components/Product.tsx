
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




// Functional component
const Products: React.FC = () => {
   

 
  return (
    <div >
    
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"  />
          <Card.Body>
            <Card.Title></Card.Title>
            <p>Rating: </p>
            <p>Price: </p>
            <p>Category: </p>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
     
    </div>
  );
};

export default Products;
