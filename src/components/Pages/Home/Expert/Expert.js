import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import expert1 from '../../../../images/experts/expert-1.jpg'
import expert2 from '../../../../images/experts/expert-2.jpg'
import expert3 from '../../../../images/experts/expert-3.jpg'
import expert4 from '../../../../images/experts/expert-4.jpg'
import expert5 from '../../../../images/experts/expert-5.jpg'
import expert6 from '../../../../images/experts/expert-6.png'
const experts = [
    { name: 'Will Smith', img: expert1, id: 1 },
    { name: 'Robert', img: expert2, id: 2 },
    { name: 'Chris Hemsworth', img: expert3, id: 3 },
    { name: 'Tobey Magure', img: expert4, id: 4 },
    { name: 'Tom Holand', img: expert5, id: 5 },
    { name: 'Steve', img: expert6, id: 6 },
]
const Expert = () => {

    return (
        <div>
            <Container>
                <h1 className='text-center my-5 pt-4 text-primary'>Our Experts</h1>
                <Row className='g-4'>
                    {
                        experts.map(expert => <Col md={4} key={expert.id}>
                            <Card>
                                <Card.Img variant="top" src={expert.img} />
                                <Card.Body>
                                    <Card.Title>{expert.name}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Button className=' btn text-white'>Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Expert;