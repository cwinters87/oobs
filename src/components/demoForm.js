import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import * as styles from './demoForm.module.css'

function DemoForm({closeForm}) {

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
    
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
    // else {
    //     event.preventDefault();
    //     closeForm()
    // }
    
  //   setValidated(true);
  // };
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState(),
        onInput = ({target:{value}}) => setValue(value),
        handleSubmit = event => {
          const form = event.currentTarget
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          else {
            event.preventDefault();
            console.log(value)
            setValue()
            closeForm()
          }
          setValidated(true)
          // event.preventDefault()
          // event.stopPropagation()
          // console.log(value)
          // setValue()
        }

  // function run( $record, $ajax_handler ) {
	    
//   $form_name = $record->get_form_settings( 'form_name' );
  
//   if ( 'contact form' !== $form_name ) {
//       return;
//   }
  
//   $raw_fields = $record->get( 'fields');
//   $fields = [];
//   foreach ( $raw_fields as $id => $field ) {
//       $fields[ $id ] = $field['value'];
//   }
  
//   $lead_email = $fields['emailLead'];
//   $lead_name = $fields['nameLead'];
//   $lead_subject = $fields['subjectLead'];
//   $lead_notes = $fields['notesLead'];
//   $lead_phone = $fields['phoneLead'];
  
//     $url = 'https://crm.tasksuite.com/create_lead';

//     $data = wp_remote_post($url, array(
//         'headers'   => array('Content-Type' => 'application/json; charset=utf-8'),
//         'body'      => json_encode([
//                         'type' => 'contactus',
//               'email' => $lead_email,
//               'name' => $lead_name,
//               'subject' => $lead_subject,
//               'notes' => $lead_notes,
//               'phone' => $lead_phone,
//               ]),
//         'method'    => 'POST',
//         'data_format' => 'body',
//     ));
// }

  

  

  return (
    <Form className={styles.container} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className={styles.row}>

        <Form.Group as={Col} controlId="validationFirstName">
          {/* <Form.Label>First name:</Form.Label> */}
          <Form.Control
            required
            type="text"
            onChange={onInput}
            value={value}
            placeholder="First name"
            // name="firstName"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationLastName">
          {/* <Form.Label>Last name:</Form.Label> */}
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a last name.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className={styles.row}>

        <Form.Group as={Col} controlId="validationEmail">
          {/* <Form.Label>Email address:</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Email Address"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter an email address.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCompany">
          {/* <Form.Label>Company Name:</Form.Label> */}
          <Form.Control type="text" placeholder="Company name" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a company name.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className={styles.row}>

        <Form.Group as={Col} controlId="validationPhone">
          {/* <Form.Label>Phone Number:</Form.Label> */}
          <Form.Control type="tel" placeholder="Phone Number" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationWebsite">
          {/* <Form.Label>Website:</Form.Label> */}
          <Form.Control type="text" placeholder="Website" />
        </Form.Group>

      </Row>
    
      <Button className={styles.button} type="submit">Request Demo</Button>
    
    </Form>
  );
  
}

export default DemoForm



