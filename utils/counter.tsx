import {createContext, ReactNode, useCallback, useContext, useState} from "react" 

type CounterContextValue = {
  count: number
  increase?: () => void
  decrease?: () => void
}

const CounterContext = createContext<CounterContextValue>({
  count: 0,
  // increase: () => {},
  // decrease: () => {}
});

type CounterProviderProps = {
  children: ReactNode
}

export const useCounterContext = () => useContext(CounterContext)

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  const increase = useCallback(()=>{
    setCount(prev => prev+1)
  },[])

  const decrease = useCallback(()=>{
    setCount(prev => prev-1)
  },[])

  const value = {
    count,
    increase,
    decrease,
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};