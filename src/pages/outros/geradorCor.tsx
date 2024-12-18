import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useBoolean from "@/data/hooks/useBoolean";
import { useLayoutEffect, useRef, useState } from "react";

export default function () {
  //1 - mostrar a div condicionalmente, aparecer quando clicar em sortear e desaparecer quando clicar em apagar cor
  const [mostrar, toggleMostrar, mostrarTrue, mostrarFalse] = useBoolean()
  //2 - Exibir um texto no display: "Clique em sortear", ou "Exibir uma cor aleatória"
  const [texto, setTexto] = useState("Clique em sortear")
  //3 - Alterar a cor da div de acordo com a cor gerada
  const ref = useRef<any>()

  function gerCorAleatoria() {
    const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff)
    const cor = numeroAleatorioHexadecimal.toString(16).toUpperCase()
    return cor
  }

  useLayoutEffect(() => {
    if(mostrar){
      const cor = gerCorAleatoria()
      setTexto(`#${cor}`)
      ref.current.style.backgroundColor = `#${cor}`
    } else {
      setTexto("Clique em sortear")
    }
  }, [mostrar])

  return (
    <Pagina titulo="Gerador de Cor" subtitulo="Criando exemplos mais complexos com useLayoutEffect">
      <Flex>
        <Botao texto="Sortear cor" onClick={mostrarTrue} />
        <Botao texto="Apagar cor" onClick={mostrarFalse} />
      </Flex>

      <Display texto={texto} />
      {mostrar && (
        <div className="h-32 w-32"  ref={ref}></div>
      )}

    </Pagina>
  )
}