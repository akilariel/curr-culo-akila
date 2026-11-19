import Relatorio from "../../components/Relatorio";
import { tecnologias } from "../../data/perfil";
export const metadata = { title: "Sobre" };
export default function Sobre() {
  return (
    <Relatorio rota="/sobre" nota="Conferir o equipamento de novo.">
      <h1>Baú de itens</h1>
      <p>Tecnologias e módulos usados no desenvolvimento deste app:</p>
      <ul className="chk">
        {tecnologias.map((t) => (
          <li key={t.nome}><b>[X] {t.nome}</b><span>{t.uso}</span></li>
        ))}
        <li><b>[X] Erva verde (café)</b><span>Restaura o foco em noites de entrega</span></li>
      </ul>
    </Relatorio>
  );
}
