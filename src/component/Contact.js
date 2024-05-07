import React from "react"
import { Form, Button} from 'react-bootstrap';
import Navbar from "./Navbar.js";
import Elements from "./Elements.js";
 
function Contact(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = event.currentTarget[0]._valueTracker.getValue();
    let email = event.currentTarget[1]._valueTracker.getValue();
    let message = event.currentTarget[2]._valueTracker.getValue();
    const templateId = 'template_rl28bsg';
    const serviceID = 'mailPro';
    if(name !== "" & email !== "" & message !== ""){
      sendFeedback(serviceID, templateId, { from_name: name, message: message, reply_to: email })
    }
    event.target.reset();
    name = "";
    email = "";
    message = "";
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        alert(`Le message a bien été envoyé, avec ${variables.reply_to} comme email de contact, merci !`)
    }).catch(err => alert('Une erreur est survenue lors de l\'envoi du message'))
}

  return (
    <>
    <div className="page">
    <Navbar></Navbar>
    <Elements.TitreBalise titre="Contact" />
      <div className="div-wrap">
        <Form id="contactForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <Form.Label>Nom / Entreprise</Form.Label>
            <Form.Control type="text" placeholder="Nom" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput2">
            <Form.Label>Adresse mail</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
            <Form.Label>Votre message</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
          <Button type="submit" className="button">Envoyer</Button>
        </Form>
      </div>
      <img src="./assets/drawing.svg" alt="background" className="div-wrap-img" />
    </div>
    </>
  )
}
 
export default Contact;