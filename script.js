//niciando
const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
};
  
function buscaCortePorId(id) {
    for (const corte of barbearia.cortes) {
      if (corte.id === id) {
        return corte;
      }
    }
    return "Corte não encontrado";
}
  
function buscaBarbaPorId(id) {
    for (const barba of barbearia.barbas) {
      if (barba.id === id) {
        return barba;
      }
    }
    return "Barba não encontrada";
}
  
function verificaStatusBarbearia() {
    return barbearia.estaAberto ? "Estamos abertos" : "Estamos fechados";
}
  
function retornaTodosCortes() {
    return barbearia.cortes;
}
  
function retornaTodasBarbas() {
    return barbearia.barbas;
}
  
function criaPedido(nomeCliente, corteId, barbaId) {
    const pedido = {};
    pedido.nome = nomeCliente;
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);
    pedido.pedidoCorte = corte.tipo;
    pedido.pedidoCortePreco = corte.valor;
    pedido.pedidoBarba = barba.tipo;
    pedido.pedidoBarbaPreco = barba.valor;
    return pedido;
}
  
function atualizaPedido(lista, id, novoTipo, novoValor) {
    for (const item of lista) {
      if (item.id === id) {
        item.tipo = novoTipo;
        item.valor = novoValor;
        break;
      }
    }
    return lista;
}
  
function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
  
  
