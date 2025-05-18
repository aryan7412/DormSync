import { useNavigate } from 'react-router-dom';

function Button({ to, buttonText, width = "w-full", height = "py-2" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`${width} ${height} mt-6 px-5 bg-[#39d5ff] hover:bg-[#2bb9de] text-black font-semibold rounded-xl transition`}
    >
      {buttonText}
    </button>
  );
}

export default Button;
