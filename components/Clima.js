"use client";
import { useEffect, useState } from "react";

const URL = "https://api.open-meteo.com/v1/forecast?latitude=-8.05&longitude=-34.88&current=temperature_2m,wind_speed_10m&timezone=America%2FRecife";

export default function Clima() {
  const [d, setD] = useState(null);
  const [erro, setErro] = useState(false);
  useEffect(() => {
    fetch(URL).then((r) => r.json()).then((j) => setD(j.current)).catch(() => setErro(true));
  }, []);
  return (
    <aside className="clima" aria-live="polite">
      <span>Agora no Recife</span>
      {erro && <strong>Não foi possível carregar o clima. Recarregue a página.</strong>}
      {!erro && !d && <strong>Carregando…</strong>}
      {d && <strong>{Math.round(d.temperature_2m)}°C · vento {Math.round(d.wind_speed_10m)} km/h</strong>}
    </aside>
  );
      }
