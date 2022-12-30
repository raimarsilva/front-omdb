import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";

export default function ReviewModal(props) {

    const endpoint = `reviews/${props.movieReview}`;
    const { token } = useContext(AuthContext);
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const [comment, setComment] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        handleShow()
    }, [])

    function handleClose() {
        setShow(false);
        props.setMovieReview(null);
    };

    function handleShow() { setShow(true) };

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    async function saveReview() {
        await api.post(endpoint, { comment, stars: 5 }, config)
            .then(resp => {
                alert(resp.data.msg);
                handleClose();
            })
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Escreva sua análise</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Label>Filme: {props.movieReview}</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="reviewText"
                            value={comment}
                            onChange={handleCommentChange} />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary" onClick={saveReview}>Salvar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
};