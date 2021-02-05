const ESTADO_INICIAL = { 
    sapato: {},
    feed: [
        {
            id: 1,
            color: "Preto",
            tamanho: "40",
            preco: "89,99"
        },
        {
            id: 2,
            color: "Rosa",
            tamanho: "36",
            preco: "99,99"
        },
        {
            id: 3,
            color: "Branco",
            tamanho: "42",
            preco: "152,99"
        },
    ],
};

export default function sapatos(state= ESTADO_INICIAL, action){
if(action.type === "ADICIONAR_CARRINHO"){
    console.log(action)
    return {
        ...state,
        sapato: action.sapatos,
    };
}
    return state;
}
