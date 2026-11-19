import Relatorio from "../../components/Relatorio";
import { projetos } from "../../data/perfil";
import Repos from "./Repos";
export const metadata = { title: "Projetos desenvolvidos" };
export default function Page() {
  return (
    <Relatorio rota="/projetos" nota="Tudo funcionando. Ver os repositórios!">
      <h1>Arquivos recuperados</h1>
      <ol className="regs">
        {projetos.map((p, i) => (
          <li key={p.nome}>
            <h2>Arquivo 0{i + 1}: {p.nome}</h2>
            <p>{p.texto}</p>
            <p className="small">Tecnologias: {p.stack.join(", ")}</p>
          </li>
        ))}
      </ol>
      <h2>Sala de salvamento</h2>
      <p>Máquina de escrever encontrada. Progresso salvo no GitHub:</p>
      <Repos />
    </Relatorio>
  );
}
