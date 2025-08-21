"use client";
import React, { createContext, useContext, useState } from 'react';

interface Usuario {
  nombre: string;
  autenticado: boolean;
}

interface Gasto {
  id: number;
  monto: number;
  categoria: string;
  descripcion: string;
  fecha: string;
}

interface AppContextType {
  usuario: Usuario;
  login: (nombre: string, clave: string) => boolean;
  logout: () => void;
  presupuesto: number;
  setPresupuesto: (valor: number) => void;
  gastos: Gasto[];
  agregarGasto: (gasto: Omit<Gasto, 'id'>) => void;
  categorias: string[];
  agregarCategoria: (categoria: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario>({ nombre: '', autenticado: false });
  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [categorias, setCategorias] = useState<string[]>(['Comida', 'Transporte', 'Entretenimiento']);

  const login = (nombre: string, clave: string) => {
    if (nombre === 'admin' && clave === 'admin123') {
      setUsuario({ nombre, autenticado: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario({ nombre: '', autenticado: false });
  };

  const agregarGasto = (gasto: Omit<Gasto, 'id'>) => {
    setGastos(prev => [...prev, { ...gasto, id: prev.length + 1 }]);
  };

  const agregarCategoria = (categoria: string) => {
    if (!categorias.includes(categoria)) {
      setCategorias(prev => [...prev, categoria]);
    }
  };

  return (
    <AppContext.Provider value={{ usuario, login, logout, presupuesto, setPresupuesto, gastos, agregarGasto, categorias, agregarCategoria }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext debe usarse dentro de AppProvider');
  return context;
}
