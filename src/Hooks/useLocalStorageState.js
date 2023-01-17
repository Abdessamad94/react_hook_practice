import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let val;

    try {
      val = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      val = defaultValue;
    }

    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorageState;
