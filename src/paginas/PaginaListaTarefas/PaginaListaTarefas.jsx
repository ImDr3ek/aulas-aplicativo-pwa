import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CamposCustomizados from "../../componentes/CamposCustomizados/CamposCustomizados";
import { FaRegTrashAlt } from "react-icons/fa";
import "./PaginaListaTarefas.css"
import { GiSwordClash } from "react-icons/gi";
import { buscarNoLocalStorage, salvarNoLocalStorage } from "../../servicos/LocalStorage.servicos";
import { toast } from 'react-toastify';

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState(buscarNoLocalStorage("tarefas") || []);

  const adicionarTarefa = () => {
    if (descricaoTarefa.trim()) {
      const novaTarefa = {
        id: Date.now(),
        descricao: descricaoTarefa
      }
      setTarefas([...tarefas, novaTarefa]);
      setDescricaoTarefa("");
      toast.success("Tarefa adicionada",
     {autoClose:3000,
      closeOnClick: true});
      salvarNoLocalStorage("tarefas", [...tarefas, novaTarefa])
    }else{
   toast.error("Preencha o campo tarefas!",
     {autoClose:3000,
      closeOnClick: true});

    }
  };

const removerTarefa = (id) => {
  if(confirm("Are u sure?")){
    const tarefasAtualizadas = tarefas.filter((item) => item.id != id);
    setTarefas(tarefasAtualizadas);
    salvarNoLocalStorage("tarefas", tarefasAtualizadas)
  }

};
  
  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <CamposCustomizados
        label="Tarefa"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descricaoTarefa}
        onChange={(e) => setDescricaoTarefa(e.target.value)}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar Tarefa
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return <div key={item.id} className="PaginaListaTarefas_item">
          <span>
          <input type="checkbox" />
          {item.descricao}
          </span>
          <FaRegTrashAlt color="red" onClick={() => removerTarefa(item.id)}/>

          </div>;
      })}

      {!tarefas.length && <span className="PaginaListaTarefas_vazia">
        Nenhuma Tarefa Cadastrada <GiSwordClash size={24}/> </span>}
    </Principal>
  );
}

export default PaginaListaTarefas;
