import Relatorio from "../components/Relatorio";
import Clima from "../components/Clima";
import { perfil } from "../data/perfil";

export default function Home() {
  return (
    <Relatorio rota="/" nota="Raccoon City fica longe. Aqui é Recife!">
      <h1>{perfil.nome}</h1>
      <p className="small">{perfil.curso} · {perfil.cidade}</p>
      <p className="lead">{perfil.resumoCurto}</p>
      <p>{perfil.resumo}</p>
      <p>Condição do autor: <b className="ok">FINE</b> (estável). Fitas de tinta restantes: <b>3</b>. Contato: <a href={`mailto:${perfil.email}`}>{perfil.email}</a>.</p>
      <h2>Observação ambiental</h2>
      <Clima />
    </Relatorio>
  );
}
