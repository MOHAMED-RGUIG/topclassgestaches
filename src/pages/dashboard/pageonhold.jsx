import React from "react";
import { Typography } from "@material-tailwind/react";

export function PageOnHold() {

  const handleRedirect = () => {
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      const userParams = encodeURIComponent(loggedInUser);
      window.location.href = `https://topclass1.vercel.app/?user=${userParams}`;
    } else {
      window.location.href = "/login";
    }
  };

  const handleRedirect2 = () => {
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      const userParams = encodeURIComponent(loggedInUser);
      window.location.href = `https://topclass1.vercel.app/orders:?user=${userParams}`;
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="text-center space-y-4">
        <Typography variant="h4" color="blue-gray" className="mb-6">
          Gestion des Commandes
        </Typography>
        <button
          onClick={handleRedirect}
          className="bg-blue-500 text-white py-2 px-6 w-64 rounded shadow-lg transition transform hover:bg-blue-600 hover:shadow-xl hover:scale-105"
        >
          Ajouter Commande
        </button>
        <button
          onClick={handleRedirect2}
          className="bg-blue-500 text-white py-2 px-6 w-64 rounded shadow-lg transition transform hover:bg-blue-600 hover:shadow-xl hover:scale-105"
        >
          Liste Commandes
        </button>
      </div>
    </div>
  );
}

export default PageOnHold;
