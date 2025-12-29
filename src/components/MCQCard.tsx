import { useState } from "react";

interface MCQCardProps {
  number: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const MCQCard = ({ number, question, options, correctAnswer }: MCQCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setShowAnswer(true);
  };

  const resetQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div className="question-card">
      <div className="flex items-start gap-4 mb-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
          {number}
        </span>
        <h4 className="font-medium text-foreground leading-relaxed">{question}</h4>
      </div>

      <div className="space-y-3 ml-12">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === correctAnswer;
          const showCorrect = showAnswer && isCorrect;
          const showIncorrect = showAnswer && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={showAnswer}
              className={`w-full text-left mcq-option ${
                showCorrect
                  ? "border-green-500 bg-green-50 text-green-800"
                  : showIncorrect
                  ? "border-red-500 bg-red-50 text-red-800"
                  : ""
              }`}
            >
              <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center font-semibold text-sm ${
                showCorrect
                  ? "border-green-500 bg-green-500 text-primary-foreground"
                  : showIncorrect
                  ? "border-red-500 bg-red-500 text-primary-foreground"
                  : "border-border"
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
              {showCorrect && <span className="text-green-600">✓</span>}
              {showIncorrect && <span className="text-red-600">✗</span>}
            </button>
          );
        })}
      </div>

      {showAnswer && (
        <div className="mt-4 ml-12 flex items-center justify-between">
          <span className={`text-sm font-medium ${selectedOption === correctAnswer ? "text-green-600" : "text-red-600"}`}>
            {selectedOption === correctAnswer ? "🎉 Correct!" : `❌ Incorrect. The answer is ${String.fromCharCode(65 + correctAnswer)}`}
          </span>
          <button
            onClick={resetQuestion}
            className="text-sm text-primary hover:underline"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MCQCard;
