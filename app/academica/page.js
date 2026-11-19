import Relatorio from "../../components/Relatorio";
import Timeline from "../../components/Timeline";
import { academico } from "../../data/perfil";
export const metadata = { title: "Relatório de formação" };
export default function Page() {
  return (
    <Relatorio rota="/academica" nota="Ainda aprendendo. Não parar.">
      <h1>Relatório de formação</h1>
      <Timeline itens={academico} />
    </Relatorio>
  );
}
