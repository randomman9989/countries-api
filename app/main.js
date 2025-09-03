const apiBase = "http://localhost:3000/countries";
const select = document.getElementById("country-select");
const infoDiv = document.getElementById("country-info");
const nameEl = document.getElementById("country-name");
const flagEl = document.getElementById("country-flag");
const capitalEl = document.getElementById("country-capital");
const populationEl = document.getElementById("country-population");
const languagesEl = document.getElementById("country-languages");
const funFactEl = document.getElementById("country-funfact");

// Fetch all countries for dropdown
fetch(apiBase)
  .then(res => res.json())
  .then(countries => {
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country.name;
      option.textContent = country.name;
      select.appendChild(option);
    });
  });

select.addEventListener("change", () => {
  const selected = select.value;
  if (!selected) {
    infoDiv.style.display = "none";
    return;
  }
  fetch(`${apiBase}/${encodeURIComponent(selected)}`)
    .then(res => res.json())
    .then(country => {
      nameEl.textContent = country.name;
      flagEl.src = country.map_image_url || "";
      flagEl.alt = `${country.name} flag`;
      capitalEl.textContent = country.capital;
      populationEl.textContent = country.population.toLocaleString();
      languagesEl.textContent = country.languages;
      funFactEl.textContent = country.fun_fact || "";
      infoDiv.style.display = "block";
    })
    .catch(() => {
      infoDiv.style.display = "none";
      alert("Country info not found.");
    });
});
