"use client";
import React, { createContext, useContext, useState } from 'react';

interface Usuario {
  nombre: string;
  autenticado: boolean;
}

interface Gasto {
  idgasto: number;
  monto: number;
  descripcion: string;
  categoria: string;
  fecha: string;
}

interface AppContextType {
  usuario: Usuario;
  login: (nombre: string, clave: string) => boolean;
  logout: () => void;
  presupuesto: number;
  setPresupuesto: (valor: number) => void;
  gastos: Gasto[];
  setGastos: (gastos: Gasto[]) => void;
  categorias: string[];
  agregarCategoria: (categoria: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
export type { AppContextType, Usuario, Gasto };

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext debe usarse dentro de AppProvider');
  return context;
}
