"use client";
import React, { useState } from 'react';
import AppContext, { AppContextType, Usuario, Gasto } from './AppContext';

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

  const agregarCategoria = (categoria: string) => {
    if (!categorias.includes(categoria)) {
      setCategorias(prev => [...prev, categoria]);
    }
  };

  const value: AppContextType = {
    usuario,
    login,
    logout,
    presupuesto,
    setPresupuesto,
    gastos,
    setGastos,
    categorias,
    agregarCategoria,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
