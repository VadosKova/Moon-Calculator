import './App.css'
import { useState, useEffect } from "react";
import LogoImage from './assets/logo.png'
import CopyImage from './assets/copy.png'
import SaveImage from './assets/save.png'
import WidgetImage from './assets/widget.png'

function App() {
  const today = new Date();

  const [day, setDay] = useState(String(today.getDate()));
  const [month, setMonth] = useState(
    [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря",
    ][today.getMonth()]
  );
  const [year, setYear] = useState(String(today.getFullYear()));
  const [precision, setPrecision] = useState(2);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function calculatePhase() {
    const monthIndex = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря",
    ].indexOf(month);

    const y = Number(year);
    const m = monthIndex + 1;
    const d = Number(day);

    const a = Math.floor((14 - m) / 12);
    const y2 = y + 4800 - a;
    const m2 = m + 12 * a - 3;

    const jd =
      d +
      Math.floor((153 * m2 + 2) / 5) +
      365 * y2 +
      Math.floor(y2 / 4) -
      Math.floor(y2 / 100) +
      Math.floor(y2 / 400) -
      32045;

    const daysSinceNew = jd - 2451550.1;
    const newMoons = daysSinceNew / 29.53058867;
    const phase = newMoons - Math.floor(newMoons);

    const moonAge = phase * 29.53058867;
    const moonPercent = (1 - Math.cos(phase * 2 * Math.PI)) / 2 * 100;

    let phaseName = "";
    let direction = "";

    if (phase < 0.03 || phase > 0.97) {
      phaseName = "Новолуние";
      direction = "—";
    } else if (phase < 0.25) {
      phaseName = "Первая четверть";
      direction = "Растущая луна";
    } else if (phase < 0.5) {
      phaseName = "Полнолуние";
      direction = "Растущая луна";
    } else if (phase < 0.75) {
      phaseName = "Третья четверть";
      direction = "Убывающая луна";
    } else {
      phaseName = "Последняя четверть";
      direction = "Убывающая луна";
    }

    setResult({
      age: moonAge.toFixed(precision),
      percent: moonPercent.toFixed(precision),
      direction,
      phase: phaseName,
    });
  }

  return (
    <>
      
    </>
  )
}

export default App
