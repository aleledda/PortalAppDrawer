import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Parser from 'html-react-parser'

function Modale(props) {
    // Modale contiene tutti gli attributi riguardanti la costruzione del modale
    const modale = props.modale;

    return (
        <Modal
            {...props}
            key={ modale.key }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>{ modale.titolo }</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>{ modale.sottoTitolo }</h6>
                <p>
                    { modale.corpo }
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-light" onClick={props.onHide}>Chiudi</Button>
                { modale.azioni }
            </Modal.Footer>
        </Modal>
    );
}
export default Modale;