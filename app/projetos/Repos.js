"use client";
import { useEffect, useState } from "react";
import { perfil } from "../../data/perfil";

// GitHub REST API pública (sem chave): repositórios mais recentes.
export default function Repos() {
  const [repos, setRepos] = useState(null);
  const [erro, setErro] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${perfil.github}/repos?sort=updated&per_page=6`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setRepos)
      .catch(() => setErro("Não foi possível carregar os repositórios. Confira o usuário em data/perfil.js."));
  }, []);
  if (erro) return <p>{erro}</p>;
  if (!repos) return <p>Carregando…</p>;
  if (!repos.length) return <p>Nenhum repositório público ainda.</p>;
  return (
    <ul className="repos">
      {repos.map((r) => (
        <li key={r.id}>
          <a href={r.html_url} target="_blank" rel="noreferrer">{r.name}</a>
          <span>{r.language || "—"} · {r.stargazers_count} estrelas</span>
        </li>
      ))}
    </ul>
  );
}
