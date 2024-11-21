import { createBrowserRouter } from "react-router-dom"; // Asegúrate de importar createBrowserRouter

// PAGES
import Adopt from "../page/Adopt/Adopt";
import Logout from "../page/Logout/Logout";
import OurPets from "../page/OurPets/OurPets";

// LAYOUT
import LayoutPublic from "../layout/LayoutPublic";

// Error
import NotFound from "../Components/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Adopt />,
            },
            {
                path: "/Logout", // El espacio extra fue eliminado aquí
                element: <Logout />,
            },
            {
                path: "/OurPets",
                element: <OurPets />,
            },
        ],
    },
]);
