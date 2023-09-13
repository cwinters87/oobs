import React, { useState } from 'react'
import { navigate } from "gatsby"
import { Button } from '../shared'
import * as styles from "./faqAccordion.module.css"

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.accordionItem}>
      {isOpen && <div className={styles.accordionOpenClose}>-</div>}
      {!isOpen && <div className={styles.accordionOpenClose}>+</div>}
      <button onClick={() => setIsOpen(!isOpen)} className={styles.accordionTitle}>
        {question}
      </button>
      {isOpen && <p className={styles.accordionContent}>{answer}</p>}
    </div>
  )
}

const FAQAccordion = () => {

  const demo = () => {
    return (
      <>
    <p>Click below to request a demo.</p>
      <Button
      onClick={() => {
        navigate("/contact")
      }}
    >
      <p>Request a demo</p>
    </Button>
    </>
    )
  }

  const email = () => {
    return (
        <p>
          TaskSuite offers same day support for all users. just email support at <a href="mailto:support@tasksuite.com">support@tasksuite.com</a>
        </p>
    )
  }

  const faqs = [
    {
      question: 'What is TaskSuite?',
      answer: 'TaskSuite is a comprehensive loan processing and management system that brings together loan origination and management into a single source of truth, along with automated credit processing.'
    },
    {
      question: 'What makes TaskSuite different from other loan management tools?',
      answer: 'TaskSuite is not just a tool but an end-to-end loan system. It is designed specifically for the loan industry, ensuring that it works efficiently and is fit for its intended purpose.'
    },
    {
      question: `What is TaskSuite's Credit AI?`,
      answer: `TaskSuite's Credit AI is a sophisticated system designed to revolutionize the way credit checks and fraud protection are handled in the loan industry. It can be set to make automated decisions based on predefined criteria. This ensures faster loan processing times while still maintaining a high level of accuracy.`
    },
    {
      question: 'How does TaskSuite ensure data accuracy and consistency?',
      answer: 'TaskSuite provides unified data, enabling better decision-making by having one consistent source of truth.'
    },
    {
      question: 'Who is TaskSuite designed for?',
      answer: 'TaskSuite was built by loan management veterans, catering to the unique needs of lenders and brokers in the loan industry.'
    },
    {
      question: 'What are the main features of TaskSuite?',
      answer: 'TaskSuite offers cloud-based features like loan origination, credit AI integration, loan servicing, and automated loan application processing, tracking, and reporting.'
    },
    {
      question: 'Is TaskSuite customizable?',
      answer: 'Yes, TaskSuite offers customizable solutions that can be tailored to the specific needs of the loan industry, ensuring that the software is not rigid and can adapt to various requirements.'
    },
    {
      question: 'How can I get a demo of TaskSuite?',
      answer: demo()
    },
    {
      question: 'How does TaskSuite ensure the security of my data?',
      answer: 'TaskSuite employs advanced encryption methods and follows industry best practices to ensure the utmost security of your data.'
    },{
      question: 'What kind of support does TaskSuite offer?',
      answer: email()
    },{
      question: 'How does TaskSuite stay updated with changing loan regulations and industry standards?',
      answer: 'TaskSuite regularly updates its platform in line with industry standards and regulations, ensuring compliance and up-to-date features for users.'
    },{
      question: 'How does TaskSuite help in reducing loan processing time?',
      answer: 'TaskSuite streamlines the loan process by automating tasks, centralizing data, and providing tools like automated loan application processing, which significantly reduces the time taken from loan origination to closure.'
    },
    // ... Add all other questions and answers here
  ]

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQAccordion
