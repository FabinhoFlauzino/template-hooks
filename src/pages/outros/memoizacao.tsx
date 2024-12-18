import InputFormatado from "@/components/formulario/InputFormatado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useMemo, useState } from "react";

export default function () {
  const [numero1, setNumero1] = useState(1)
  const [numero2, setNumero2] = useState(1)
  const [numero3, setNumero3] = useState(1)
  const [numero4, setNumero4] = useState(1)

  let potencia = useMemo(() => {
    let future = Date.now() + 3000
    while (Date.now() < future);
    return numero1 ** numero2
  }, [numero1, numero2])

  let soma = numero3 + numero4

  return (
    <Pagina titulo="Memoização 1" subtitulo="Usando o hook useMemo">
      <Flex col center>
        <Display texto={
          <>
            <span>{numero1}</span>
            <sup>{numero2}</sup>
            <span> = {potencia}</span>
          </>
        }
        />
        <Flex>
          <InputFormatado tipo="number" valor={numero1} onInput={(e) => setNumero1(+e.target.value)} />
          <InputFormatado tipo="number" valor={numero2} onInput={(e) => setNumero2(+e.target.value)} />
        </Flex>

        <Display texto={`${numero3} + ${numero4} = ${soma}`} />
        <Flex>
          <InputFormatado tipo="number" valor={numero3} onInput={(e) => setNumero3(+e.target.value)} />
          <InputFormatado tipo="number" valor={numero4} onInput={(e) => setNumero4(+e.target.value)} />
        </Flex>
      </Flex>
    </Pagina>
  )
}