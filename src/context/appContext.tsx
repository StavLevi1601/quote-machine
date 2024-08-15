import React, { createContext, useContext, useState } from "react";
import { randomColor } from "../utils/functions";

export type ColorContextType = {
  color: string;
  changeColor: () => void;
};

export const ColorContext = createContext<ColorContextType | null>(null);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [color, setColor] = useState<string>(randomColor());

  const changeColor = () => {
    setColor(randomColor());
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = (): ColorContextType | null => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
