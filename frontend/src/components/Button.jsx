import { useNavigate } from 'react-router-dom';

function Button({ to, buttonText }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="mt-6 px-5 py-2 bg-[#39d5ff] hover:bg-[#2bb9de] text-black font-semibold rounded-xl transition"
    >
      {buttonText}
    </button>
  );
}

export default Button;
