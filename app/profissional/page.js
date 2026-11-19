import Relatorio from "../../components/Relatorio";
import Timeline from "../../components/Timeline";
import { profissional } from "../../data/perfil";
export const metadata = { title: "Relatório de campo" };
export default function Page() {
  return (
    <Relatorio rota="/profissional" nota="Começou no chão de fábrica.">
      <h1>Relatório de campo</h1>
      <Timeline itens={profissional} />
    </Relatorio>
  );
}
