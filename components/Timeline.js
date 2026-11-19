export default function Timeline({ itens }) {
  return (
    <ol className="regs">
      {itens.map((i, n) => (
        <li key={i.titulo}>
          <h2>Registro {n + 1}: {i.titulo}</h2>
          <p className="small">{i.onde} · {i.periodo}</p>
          <p>{i.texto}</p>
        </li>
      ))}
    </ol>
  );
}
