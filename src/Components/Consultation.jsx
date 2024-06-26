import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


export default function Consultation() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
  {/* Consultation section*/}
    <div className="containerSpecial consultationBg">
           <div className="row py-5 mt-3 mx-sm-5 mx-2 pe-2">
              <div className="col-sm-5">
                <h2 className=' fw-bold py-4'>Schedule a free consultation</h2>
                <p className='fw-bold'>What happens next?</p>
                <ol>
                  <li>An expert contacts you after having analyzed your requirements;</li>
                  <li>If needed, we sign an NDA to ensure the highest privacy level;</li>
                  <li>We submit a comprehensive project proposal with estimates, timelines, CVs, etc.</li>
                </ol>
                {/* <p className='fw-bold'>Customers who trust us</p> */}
              </div>
             

              <div className="col-sm-7 formBg">
              <Form className='mx-4 px-sm-3 py-4'  ref={form} onSubmit={sendEmail}>
              <Form.Label>Select your service</Form.Label>
               <Form.Select aria-label="Default select example" className='borderless mb-4 mt-2'>
                   <option value="1">Finance</option>
                   <option value="2">Healthcare</option>
                   <option value="3">Media</option>
                   <option value="3">Logistics</option>
                   <option value="3">Automotive</option>
                   <option value="3">Telecom</option>
                   <option value="3">Others</option>
               </Form.Select>
               <Form.Group className="mb-4 borderless" controlId="formGroupUser" >
                   <Form.Control type="text" placeholder="Name" name="user_name" />
               </Form.Group>
               <Form.Group className="mb-4" controlId="formGroupEmail">
                  
                   <Form.Control type="email" placeholder="Corporate Email *" className='borderless' name="user_email" />
               </Form.Group>
               <Form.Group className="mb-4" controlId="formGroupPhone">
                   
                   <Form.Control type="text" placeholder="Phone *"  className='borderless' name="user_phone"/>
               </Form.Group>

              <div className='mb-4'>
                <input className="form-control form-control" id="formFile" type="file"  />
              </div>

              <div className="mb-4 ">
                <label for="exampleFormControlTextarea1" class="form-label">We will call you ASAP or you can schedule a call</label>
                <textarea className="form-control borderless" id="exampleFormControlTextarea1" rows="2" placeholder='Please describe your project requirement*' name="message"></textarea>
              </div>

              <Button type="submit" className='btn btn-warning fw-bold'>Send Request</Button>
               </Form>
              </div>
            </div>
        </div> 
{/* Consultation section ends*/}
    </div>
  )
}
