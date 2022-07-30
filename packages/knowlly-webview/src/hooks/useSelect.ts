import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface IUseSelect<T> {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  item: T;
  setItem: (item: T) => void;
}

const useSelect = <T>(arr: Array<T>): IUseSelect<T> => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const setItem = useCallback(
    (item: T) => {
      setSelectedIndex(arr.indexOf(item));
    },
    [arr]
  );

  return {
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
    item: arr[selectedIndex],
    setItem,
  };
};

export default useSelect;
