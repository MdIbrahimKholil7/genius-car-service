
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useData from '../../../../hooks/useData';

const Service = () => {
    const [service, setService] = useData()
    return (
        <div>
            <Container>
                <h1 className='text-center text-primary my-5 py-5'>Our Services</h1>
                <Row className='g-4'>
                    {
                        service.map(data => <Col key={data.id} md={4}>
                            <Card >
                                <Card.Img className='img-fluid' variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;