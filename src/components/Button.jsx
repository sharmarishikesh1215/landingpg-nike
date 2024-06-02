const Button = ({ label}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <i className="fa-solid fa-circle-arrow-right"></i>
    </button>
  
  );
}

export default Button;