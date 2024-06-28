import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// in typeScript we have to define type of any variable component and functions that we are using in our code

// this interface defines which type of data we are recieving from api 

interface Person {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: number;
}

// in this tsx file there is differnce in functional component we have to define that products contains react functional component

const Products: React.FC = () => {
  const [data, setData] = useState<Person[]>([]); // which type of data store in state variable

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>

        {
            data.map((product ,index)=>{
                
                    return ( 
                    <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                       {product.description}
                      </Card.Text>
                      <p>{product.rating}</p>
                      <p>{product.price}</p>
                      <p>{product.category}</p>
                      <img src={product.image} alt="" />

                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>)
                
            })
        }
          
    </div>
  );
};

export default Products;






