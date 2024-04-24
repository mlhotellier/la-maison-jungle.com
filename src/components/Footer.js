import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function checkValue(event) {
    const value = event.target.value;
    if (!value.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.currentTarget.elements.email.value;
    if (!value.includes("@")) {
      alert("L'email saisie n'est pas correcte.");
      return;
    }
    console.log(value);
    alert(`Soumission de l'adresse mail : ${value} à notre équipe.`);
    setInputValue("");
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Entrez votre mail'
          value={inputValue}
          onBlur={checkValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Entrer</button>
      </form>
    </footer>
  );
}

export default Footer;
