import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button, Modal } from 'react-bootstrap';

function Thumbnail(props){
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    function toggle(){
        modalShow ? handleClose() : handleShow();
    }

    function MyModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modalPop"
          >

            <Modal.Header className="modalHeader" id="contained-modal-title-vcenter">
                {/* <Modal.Title></Modal.Title> */}
                
            </Modal.Header>
            <Modal.Body>
            <img src={props.gif} alt="Gif de projet" className="gifProject" />
                <div className="modalSousBody">
                    <div className="headSousBody">
                        <h3>{props.titre}</h3>
                        <Button onClick={handleClose} className="button" id="close">X</Button>
                    </div>
                    <p className="projetDescription">{props.description}</p>
                    <p><h5 className="sous-titre">Technos</h5>{props.technos}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
             
            </Modal.Footer>
          </Modal>
        );
    }

    return (
        <>
        <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="thumbnail"
            onClick={toggle}
            >
            <img src={props.image} alt="Projet"/>
        </motion.div>

        <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            titre={props.titre}
            description={props.description}
            gif={props.gif}
            technos={props.technos}
        />
        </>
    )
}

export default Thumbnail;