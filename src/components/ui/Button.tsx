interface ButtonProps {
    title: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {


    return (
      <div className="cursor-pointer w-full bg-gradient-to-r from-teal-500 to-cyan-800 flex justify-center p-4 rounded-md"
        onClick={onClick}
      >
        <p className="text-white font-semibold">{title}</p>
      </div>
    );
  };
  
  export default Button;
  