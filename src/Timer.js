import { useEffect, useState } from "react";

const TimeCounter = ({ label, targetDate }) => {
  const [timeDiff, setTimeDiff] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiff(getTimeDifference(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getTimeDifference = (dateString) => {
    const target = new Date(dateString);
    const now = new Date();

    let delta = Math.abs(target - now) / 1000;

    const years = Math.floor(delta / (365.25 * 24 * 3600));
    delta -= years * 365.25 * 24 * 3600;

    const months = Math.floor(delta / (30.44 * 24 * 3600));
    delta -= months * 30.44 * 24 * 3600;

    const days = Math.floor(delta / (24 * 3600));
    delta -= days * 24 * 3600;

    const hours = Math.floor(delta / 3600);
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60);
    delta -= minutes * 60;

    const seconds = Math.floor(delta);

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  };

    // Função para montar a string com os valores > 0
  const renderTime = () => {
    const parts = [];

    if (timeDiff.years) parts.push(`${timeDiff.years} ${timeDiff.years === 1 ? "ano" : "anos"}`);
    if (timeDiff.months) parts.push(`${timeDiff.months} ${timeDiff.months === 1 ? "mês" : "meses"}`);
    if (timeDiff.days) parts.push(`${timeDiff.days} ${timeDiff.days === 1 ? "dia" : "dias"}`);
    if (timeDiff.hours) parts.push(`${timeDiff.hours} ${timeDiff.hours === 1 ? "hora" : "horas"}`);
    if (timeDiff.minutes) parts.push(`${timeDiff.minutes} ${timeDiff.minutes === 1 ? "minuto" : "minutos"}`);
    if (timeDiff.seconds >= 0) parts.push(`${timeDiff.seconds} ${timeDiff.seconds === 1 ? "segundo" : "segundos"}`);

    return parts.join(", ");
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <span style={{ fontSize: 18, fontWeight: 'bold' }}>{label}</span>
      <p style={{ fontSize: 12 }}>
        {renderTime()}
      </p>
    </div>
  );
};

export default TimeCounter;