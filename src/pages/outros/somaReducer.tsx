import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { Reducer, useReducer } from "react";

function mudaDados(estadoAtual, acao) {
  switch (acao.type) {
    case "ALTERA_N1":
      return {
        ...estadoAtual,
        numero1: acao.novoValor,
        validaNumero1: acao.novoValor > 0,
      }

    case "ALTERA_N2":
      return {
        ...estadoAtual,
        numero2: acao.novoValor,
        validaNumero2: acao.novoValor > 0,
      }

    case "SOMA":
      if (estadoAtual.validaNumero1 && estadoAtual.validaNumero2) {
        let soma = estadoAtual.numero1 + estadoAtual.numero2
        return {
          ...estadoAtual, soma
        }
      } else {
        return {
          ...estadoAtual,
          soma: -9999, // Poderia ser uma mensagem de erro aqui, por exemplo
        }
      }

    case "RESET":
      return {
        numero1: 0,
        numero2: 0,
        validaNumero1: false,
        validaNumero2: false,
        soma: 0
      }

    default:
      return estadoAtual;
  }
}


export default function () {
  const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudaDados, {
    numero1: 0,
    numero2: 0,
    validaNumero1: false,
    validaNumero2: false,
    soma: 0
  })

  return (
    <Pagina titulo="Soma com useReducer" subtitulo="Exemplo de soma com useReducer">
      <Flex col centerCross>
        <Display texto="Faça uma soma" />
        <Flex center>
          <InputFormatado
            tipo="number"
            valor={dados.numero1}
            onInput={(e) => { dispatchDados({ type: "ALTERA_N1", novoValor: +e.target.value }) }}
          />
          <span className="text-3xl ml-4">+</span>
          <InputFormatado
            tipo="number"
            valor={dados.numero2}
            onInput={(e) => { dispatchDados({ type: "ALTERA_N2", novoValor: +e.target.value }) }}
          />

          <Botao cor="bg-orange-400" texto="=" onClick={() => dispatchDados({ type: "SOMA" })} />
          <Botao cor="bg-gray-400" texto="Limpar" onClick={() => dispatchDados({ type: "RESET" })} />
        </Flex>

        <Display texto={dados.soma === -9999 ? "Valores inválidos" : dados.soma} />
      </Flex>
    </Pagina>
  )
}