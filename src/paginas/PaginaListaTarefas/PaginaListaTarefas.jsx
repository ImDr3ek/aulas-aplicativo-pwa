import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CamposCustomizados from "../../componentes/CamposCustomizados/CamposCustomizados";
import { FaRegTrashAlt } from "react-icons/fa";
import "./PaginaListaTarefas.css"
import { GiSwordClash } from "react-icons/gi";


function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (descricaoTarefa.trim()) {
      const novaTarefa = {
        id: Date.now(),
        descricao: descricaoTarefa
      }
      setTarefas([...tarefas, novaTarefa]);
      setDescricaoTarefa("");
    }else{
      alert("Tarefa Obrigatoria")
    }
  };

const removerTarefa = (id) => {
  if(confirm("Are u sure?")){
    const tarefasAtualizadas = tarefas.filter((item) => item.id != id);
    setTarefas(tarefasAtualizadas);
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
