import Link from "next/link";
import Image from "next/image";
import { perfil } from "../data/perfil";

export const ordem = [
  ["/", "Apresentação", "Início"], ["/sobre", "Equipamento", "Sobre"], ["/academica", "Formação", "Acadêmica"],
  ["/profissional", "Campo", "Profissional"], ["/projetos", "Arquivos recuperados", "Projetos"],
];

export default function Relatorio({ rota, nota, children }) {
  const i = ordem.findIndex(([r]) => r === rota);
  const prev = ordem[i - 1], next = ordem[i + 1];
  return (
    <article className="sheet">
      <nav className="tabs" aria-label="Índice">
        <span>ÍNDICE:</span>
        {ordem.map(([r, , nome], k) => (
          <Link key={r} href={r} aria-current={k === i ? "page" : undefined}>{k + 1}·{nome}</Link>
        ))}
      </nav>
      <p className="conf">
        <Image src="/umbrella.png" alt="" width={56} height={56} />
        <span>— ARQUIVO CONFIDENCIAL DA UMBRELLA · USO INTERNO —</span>
      </p>
      <header className="memo">
        <span>ARQUIVO Nº 00{i + 1}</span>
        <span>AUTOR: {perfil.nome}</span>
        <span>ASSUNTO: {ordem[i][1].toUpperCase()}</span>
        <span className="stamp">{i === 4 ? "Recuperado" : "Aprovado"}</span>
      </header>
      <div className="body">{children}</div>
      {nota && <p className="hand">{nota}</p>}
      <footer className="pager">
        {prev ? <Link href={prev[0]}>← {prev[1]}</Link> : <span />}
        <span>- {i + 1} -</span>
        {next ? <Link href={next[0]}>{next[1]} →</Link> : <span />}
      </footer>
      <p className="credit">Homenagem sem fins comerciais ao clima de Resident Evil (Capcom). Projeto acadêmico, sem afiliação.</p>
    </article>
  );
}
