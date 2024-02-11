import styles from "@/styles/OfficerModal.module.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Image from 'react-bootstrap/Image';


export default function OfficerModal(props) {
  return (
    <div className={styles.container}>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton className={styles.heading}> </Modal.Header>
        <Modal.Body className={styles.body}>
            <h1 className={styles.name}>Name Here - Position</h1>  
            <br></br>          
            <Container> 
                <Row>
                    <Col className={styles.photo}>
                        <Image src="assets/img/officers/placeholder.png" rounded fluid/>
                    </Col>

                    <Col>
                        <Row>
                            <Col>Major:</Col>
                        </Row>
                        <Row>
                            <Col>Year:</Col>
                        </Row>
                        <Row>
                            <Col>From:</Col>
                        </Row>
                        <Row>
                            <Col>Involvements:</Col>
                        </Row>
                        <Row>
                            <Col>Interests:</Col>
                        </Row>
                        <Row>
                            <Col>Hobbies:</Col>
                        </Row>
                        <Row>
                            <Col>Fun Fact:</Col>
                        </Row>
                        <Row>
                            <Col>Advice:</Col>
                        </Row>
                        <Row className={styles.contact}>
                            <Col></Col>
                            <Col>LinkedIn</Col>
                            <Col>
                                <Image src="assets/img/logos/contacts/email.png" rounded fluid />
                            </Col>
                        </Row>


                    </Col>
                </Row>
            
            </Container>

        </Modal.Body>

        <Modal.Footer className={styles.footer}>
            <br></br>
            {/* <Button onClick={props.onHide} className={styles.closeButton}>Close</Button> */}
        </Modal.Footer>
        </Modal>
    </div>
  );

}
