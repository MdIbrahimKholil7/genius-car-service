import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div className='bg-dark py-4 text-center text-white mt-5'>
            <Container>
                <div>
                    <p className='fs-5 mb-0'>&copy; {year} All Right Reserved By The Car Doctor</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;