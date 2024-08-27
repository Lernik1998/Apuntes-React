import { ReactNode } from "react";

interface EjercicioBoton {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
}

function EjercicioBoton({ children, isLoading, onClick }: EjercicioBoton) {
  return (
    <div>
      <button
        disabled={isLoading}
        onClick={onClick}
        type="button"
        className={isLoading ? 'btn btn-secondary' : 'btn btn-primary' }
      >
        {isLoading ? 'Has hecho click' : children}
      </button>
    </div>
  );
}

export default EjercicioBoton;
