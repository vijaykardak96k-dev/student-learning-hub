interface MediumQuestionCardProps {
  number: number;
  question: string;
}

const MediumQuestionCard = ({ number, question }: MediumQuestionCardProps) => {
  return (
    <div className="question-card hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
          {number}
        </span>
        <p className="font-medium text-foreground leading-relaxed">{question}</p>
      </div>
    </div>
  );
};

export default MediumQuestionCard;
