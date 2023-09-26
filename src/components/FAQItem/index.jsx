import React from 'react';
import s from './index.module.css';

export default function FAQItem({ title, question, answer }) {
  return (
    <div>
        <p className={s.title}>{title}</p>
        <p className={s.question}>{question}</p>
        <p className={s.answer}>{answer}</p>
    </div>
  )
}