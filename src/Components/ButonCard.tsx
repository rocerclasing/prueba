import icono from '../assets/img/paw.png';

const ButtonCard = () => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-purple-500 via-purple-600 
        to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
        dark:focus:ring-purple-800 font-medium text-xs px-3 py-1.5 text-center me-2 mb-2 
        flex items-center font-size-16 line-height-1.4"
    >
      <img 
        src={icono} 
        alt="Paw Icon" 
        className="inline-block mr-1 w-3 h-3 filter " // Ajuste de tamaño más pequeño para el icono
      />
      Learn more
    </button>
  );
};

export default ButtonCard;
