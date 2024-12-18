import { ReactNode, createContext, useState } from "react";

const ContextoTema = createContext({} as any)

type Props = {
  children: ReactNode
}

export function TemaProvider({ children }: Props) {
  const cores = ["green-500", "blue-500", "red-400", "pink-500", "purple-500", "yellow-600"]
  const [corDestaque, setCorDestaque] = useState<any>(cores[0])
  const ctx = { cores, corDestaque, setCorDestaque }

  return (
    <ContextoTema.Provider value={ctx}>
      {children}
    </ContextoTema.Provider>
  )
}

export default ContextoTema