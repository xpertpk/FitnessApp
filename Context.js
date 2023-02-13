import React, { createContext, useState } from "react";

const FitnessItems = createContext();
import { AntDesign } from '@expo/vector-icons';

const FitnessContext = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workouts, setWorkouts] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workouts,
        setWorkouts,
        calories,
        setCalories,
        minutes,
        setMinutes
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

export {FitnessContext, FitnessItems}