import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {

    render() {
        return (
            <div>
                <Container className='mw-100 dark-background-color'>
                    <Row>
                        <Col className='border-end border-dark border-3 min-vh-100 col-centered'>
                            <Container className='padding-top-35vh position-fixed'>
                                <Container className='px-0'>
                                    <Nav className='mx-5 border border-secondary border-bottom-0 rounded-top width-50-percentage' variant="tabs" defaultActiveKey="/home">
                                        <Nav.Item>
                                            <Nav.Link className='p-2 text-secondary' href="/home">OM</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link className='text-secondary' eventKey="link-1">INTRESSEN</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link className='text-secondary' eventKey="link-2">FAKTA</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Container>

                                <Container className='px-0'>
                                    <p className='p-2 mx-5 my-0 border border-secondary border-bottom-0 width-50-percentage'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur recusandae asperiores beatae, temporibus consequuntur debitis ducimus nesciunt itaque est odit nulla. Sequi quod molestiae ea, nulla iste quisquam cumque!
                                    </p>

                                    <p className='p-2 mx-5 border border-secondary border-top-0 rounded-bottom width-50-percentage'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia illum voluptates libero illo dolorum non nam sed pariatur vero quae magnam impedit perspiciatis nesciunt, nostrum possimus doloremque aspernatur numquam? Quod, consequatur. Architecto alias ducimus fuga aspernatur temporibus quas beatae totam nihil repudiandae, quis impedit ratione nam mollitia. Magnam tempore vel laboriosam sed amet molestias laborum facere impedit doloremque dicta?
                                    </p>
                                </Container>
                            </Container>
                        </Col>

                        <Col className='min-vh-100 right-side'>
                            <h3 className='web-developer-header padding-top-35vh text-center padding-bottom-10vh'>Webbutvecklare</h3>
                            <h1 className='name-header'>markus meldo</h1>
                            <h5 className='show-project-header text-center padding-top-15vh'>Visa projekt</h5>
                            <h5 className='arrow text-center'>&#8595;</h5>


                        </Col>
                    </Row>


                    <Row>
                        <Col></Col>
                        <Col className='min-vh-100 bright-background-color border-start border-dark border-3'></Col>
                    </Row>

                </Container >
            </div >
        );
    }
}

export default App;