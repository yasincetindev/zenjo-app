interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="faq-item">
      <h3>{question}</h3>
      <p dangerouslySetInnerHTML={{ __html: answer }} />
    </div>
  );
}
