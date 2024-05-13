const data = [
  {
    name: "SEDANS",
    image: "./images/icon-sedans.svg",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "bright-orange",
  },
  {
    name: "SUVS",
    image: "./images/icon-suvs.svg",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "dark-cyan",
  },
  {
    name: "LUXURY",
    image: "./images/icon-luxury.svg",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "very-dark-cyan",
  },
]

const main = () => {
  let html = ""

  const mainContainer = document.querySelector("main")

  data.forEach((article) => {
    html += `
    <article style="background-color: var(--${article.color});">
      <img src=${article.image} alt="Icon for ${article.name}">
      <h2>${article.name}</h2>
      <p>${article.description}</p>
      <button style="color: var(--${article.color});" onMouseOver="this.style.color='var(--transparent-white)'" onMouseOut="this.style.color='var(--${article.color})'">Learn More</button>
    </article>
    `
  })
  console.log(html)

  mainContainer.innerHTML = html
}

main()
