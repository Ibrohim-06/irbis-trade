import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NotFoundAnimation } from "../components/NotFoundAnimation";

const NotFoundPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="site-header flex min-h-screen flex-col items-center justify-center bg-white p-4 text-center relative overflow-hidden text-white">
      <div className="max-w-md z-10">
        <div className="relative mb-8">
          <NotFoundAnimation />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Страница не найдена</h2>
          <p className="text-white/70">Извините, мы не смогли найти страницу, которую вы ищете. Возможно, она была перемещена, удалена или никогда не существовала.</p>

          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#ee3c58] px-4 py-2 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Вернуться на главную
          </Link>
        </div>
      </div>

      <div className={`absolute inset-0 bg-grid-pattern bg-[size:20px_20px] transition-opacity duration-500 ${isAnimating ? "opacity-100" : "opacity-50"}`} />
    </div>
  );
};

export default NotFoundPage;