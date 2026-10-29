import Principal from "../../componentes/Principal/Principal";
import CamposCustomizados from "../../componentes/CamposCustomizados/CamposCustomizados";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { formatarComMascara, MASCARA_TELEFONE } from "../../utils/FormatarComMascara";

function PaginaCadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  const salvar = () => {
    const cliente = {
        nome,
        email,
        dataNascimento,
        telefone,
        cpf,
    };
    console.log(cliente)
  };

  return (
    <Principal titulo="Novo Cliente" voltarPara="/">
      <CamposCustomizados
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        maxLength={50}
      />

      <CamposCustomizados
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <CamposCustomizados
        label="Data Nascimento"
        value={dataNascimento}
        type="date"
        onChange={(e) => setDataNascimento(e.target.value)}
      />

      <CamposCustomizados
        label="Telefone"
        type="tel"
        value={telefone}
        onChange={(e) => setTelefone(formatarComMascara(e.target.value, MASCARA_TELEFONE))}
      />

      <CamposCustomizados
        label="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <BotaoCustomizado tipo="primario" aoClitar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroCliente;
