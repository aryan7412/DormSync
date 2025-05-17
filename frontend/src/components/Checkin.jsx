import { useEffect, useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const phrases = [
  "Stay at your own comfort.",
  "Check in with ease.",
  "Smart & Simple Booking.",
  "Built for travelers and students."
];

function Checkin({to,buttonText}) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 70 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => {}, 1000);
        } else {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="min-h-[88vh] bg-black text-white font-[Orbitron] flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 relative">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-[#39d5ff]">Plan Your Stay</h1>
          <span className="text-xl text-gray-400 h-6">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <div className="bg-black p-8 rounded-xl shadow-lg shadow-[#39d5ff22]">
          <InputField label="How many days" type="number" placeholder="Enter number of days" />
          <InputField label="How many people" type="number" placeholder="Enter number of people" />
          <InputField label="Check-in Date" type="date" />
          <InputField label="Check-in Time" type="time" />
        </div>
        <div className="flex justify-center absolute translate-x-[31rem] translate-y-[31rem]">
            <Button to={to} buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
}

export default Checkin;
