interface ButtonProps {
    title: string;
    onClick: () => void;
}

const ButtonEmpty: React.FC<ButtonProps> = ({ title, onClick }) => {

    return (
      <div className="cursor-pointer w-full bg-white border border-secondary  flex justify-center p-4 rounded-md"
        onClick={onClick}
      >
        <p className="text-primary font-semibold">{title}</p>
      </div>
    );
  };
  
  export default ButtonEmpty;
  