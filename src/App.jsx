import Plantilla from "./Components/Plantilla"; // Importando el componente 'Plantilla'

const App = () => {
  return (
    <>
      {/* Navbar: Barra de navegación */}
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl">APP</h1>
        </div>
      </div>

      {/* Contenedor principal: Flex para centrar el contenido */}
      <div className="container mx-auto flex justify-center items-center min-h-screen py-8">
        {/* Main: Contenedor de contenido central */}
        <main className="flex flex-wrap justify-center items-center gap-4">
          {/* Aquí se renderiza el componente Plantilla */}
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <Plantilla  />
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <Plantilla />
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <Plantilla />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
