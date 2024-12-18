import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
  //1 - Criar dois estados para armazenar números
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  //2 - Likar estados com o input
  //3 - Monitorar a validade dos números. O número será válido se for maior do que 0
  const [validanumero1, setValidaNumero1] = useState(false)
  const [validanumero2, setValidaNumero2] = useState(false)
  const [soma, setSoma] = useState(0)
 
  useEffect(() => {
    setValidaNumero1(numero1 > 0)
  }, [numero1])

  useEffect(() => {
    setValidaNumero2(numero2 > 0)
  }, [numero2])
  //4 - Fazer a soma clicando no botão se os números forem válidos. invalido retorne -9999
  function somarNumeros(){
    if(validanumero1 && validanumero2) {
      setSoma(numero1 + numero2)
    } else {
      setSoma(-9999)
    }
  }

  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma" />
        <Flex center>
          <InputFormatado
            tipo="number"
            valor={numero1}
            onInput={(e) => {setNumero1(+e.target.value)}}
          />
          <span className="text-3xl ml-4">+</span>
          <InputFormatado
            tipo="number"
            valor={numero2}
            onInput={(e) => {setNumero2(+e.target.value)}}
          />

          <Botao cor="bg-orange-400" texto="=" onClick={somarNumeros}/>
        </Flex>
        <Display texto={soma} />
      </Flex>
    </Pagina>
  )
}