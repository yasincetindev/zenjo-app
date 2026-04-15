interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="faq-item">
      <summary>{question}</summary>
      <p className="faq-answer" dangerouslySetInnerHTML={{ __html: answer }} />
    </details>
  );
}
