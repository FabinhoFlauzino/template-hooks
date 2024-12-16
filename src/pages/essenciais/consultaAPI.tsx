import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
  const [url, setUrl] = useState()

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(obj => setUrl(obj.message))
  }, [])

  return (
    <Pagina titulo="Requisição à API" subtitulo="Requerindo dados">
      <img className="max-h-full max-w-xs object-cover" src={url} alt="" />
    </Pagina>
  )
}