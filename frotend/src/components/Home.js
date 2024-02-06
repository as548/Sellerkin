import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Home = () => {

    const [show, setShow] = useState(false);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");


    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("")
            setName("")
            console.log("Email sent")
        }
    }

    return (
        <>
            {
                show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Email Sent.
                </Alert> : ""
            }
            <div className="container mt-2">
                <div className='d-flex justify-content-center'>
                    <h2>Sending Email With React & NodeJs</h2>
                   
                </div>
                <div className="d-flex justify-content-center">
                    <Form className='mt-2 col-lg-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Enter Your Name</Form.Label>
                      <Form.Control 
                       type="text" 
                       name='name' 
                       value={name} 
                       onChange={(e) => setName(e.target.value)}  
                       placeholder="Enter name" 
                       />
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={sendEmail}>
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>

        </>
    )
}

export default Home