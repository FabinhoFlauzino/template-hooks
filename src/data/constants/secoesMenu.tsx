import { IconAppWindow, IconArrowsLeftRight, IconColorSwatch, IconDatabase, IconDatabaseImport, IconDimensions, IconLetterCase, IconLock, IconMathGreater, IconNumbers, IconPin, IconRefreshAlert, IconSection, IconShoppingCart, IconTextColor, IconUsers } from "@tabler/icons-react";

export const secoes = [
  {
    titulo: "Essenciais",
    aberta: false,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useState",
        icone: <IconNumbers />
      },
      {
        titulo: "Votação",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUsers />
      },
      {
        titulo: "Consulta à API",
        url: "/essenciais/consultaAPI",
        tag: "useEffect",
        icone: <IconArrowsLeftRight />
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffect",
        icone: <IconMathGreater />
      },
      {
        titulo: "Contagem de Caracteres (Effect)",
        url: "/essenciais/contagemCaracteresEffect",
        tag: "useEffect",
        icone: <IconLetterCase />
      },
      {
        titulo: "State VS Referência",
        url: "/essenciais/stateVsRef",
        tag: "useRef",
        icone: <IconRefreshAlert />
      },
      {
        titulo: "Referenciando Elemento",
        url: "/essenciais/refElemento",
        tag: "useRef",
        icone: <IconSection />
      },
      {
        titulo: "Contagem de Caracteres (Ref)",
        url: "/essenciais/contagemCaracteresRef",
        tag: "useRef",
        icone: <IconLetterCase />
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: false,
    itens: [
      {
        titulo: "Modal",
        url: "/personalizados/modal",
        tag: "personalizados",
        icone: <IconAppWindow />
      },
      {
        titulo: "Tamanho Janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />
      },
      {
        titulo: "Validando Senha",
        url: "/personalizados/senha",
        tag: "personalizados",
        icone: <IconLock />
      },
    ],
  },
  {
    titulo: "Contexto",
    aberta: false,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />
      },
    ],
  },
  {
    titulo: "Outros",
    aberta: false,
    itens: [
      {
        titulo: "Memoizando elementos",
        url: "/outros/memoizacao",
        tag: "useMemo",
        icone: <IconPin />
      },
      {
        titulo: "Memoizando funções",
        url: "/outros/memoizandoFuncoes",
        tag: "useCallback",
        icone: <IconPin />
      },
      {
        titulo: "Texto Secreto",
        url: "/outros/texto",
        tag: "useLayoutEffect",
        icone: <IconTextColor />
      },
      {
        titulo: "Gerador de cor",
        url: "/outros/geradorCor",
        tag: "useLayoutEffect",
        icone: <IconColorSwatch />
      },
      {
        titulo: "Soma com useState",
        url: "/outros/somaState",
        tag: "useState",
        icone: <IconDatabase />
      },
      {
        titulo: "Soma com useReducer",
        url: "/outros/somaReducer",
        tag: "useReducer",
        icone: <IconDatabaseImport />
      },
    ],
  },
];

export default secoes