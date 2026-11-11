import { buscarNoLocalStorage, salvarNoLocalStorage } from "./LocalStorage.servicos"

export const salvarCliente = (cliente) => {
    const clientes = buscarNoLocalStorage("clientes") || [];
    clientes.push(cliente);
    salvarNoLocalStorage("clientes", clientes);
}


export const buscarClientes = () => {
    return buscarNoLocalStorage("clientes") || [];
}
