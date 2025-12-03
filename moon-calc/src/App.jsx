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

  return (
    <>
      
    </>
  )
}

export default App
