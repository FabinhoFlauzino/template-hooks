import Botao from "./Botao"
import Flex from "./Flex"

export default function SeletorDeCor() {
  const cores = ["red-400", "blue-500", "pink-500", "green-500", "purple-500", "yellow-600"]

  let listaCores = cores.map(cor => <Botao key={cor} cor={`bg-${cor}`} />)

  return (
    <Flex center gap={4} className="absolute right-3 top-20">
      {listaCores}
    </Flex>
  )
}