const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			number:1,
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
			number:2,
			title: "Távoli Galaxis",
			sub: "Rothbeer Brewery",
			text: "IPA - American"
		},
		{
			title: "Flying Rabbit AIPA",
			sub: "MONYO Brewing Co.",
			text: "IPA - American"
		},
		{
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
	]
}
console.log(beers);

const cardsContainerElement=document.getElementById("cards-container");
beers.cards.map(card => {
    const cardContainerElement = document.createElement("div");
    cardContainerElement.setAttribute("class", "card-container");
    cardsContainerElement.appendChild(cardContainerElement);
    const titleElement = document.createElement("div");
	const breakElement= document.createElement("hr");
	const subElement=document.createElement("div");
	const textElement=document.createElement("div");
	const detailContainerElement=document.createElement("div");
	const detailsElement = document.createElement("div");
	const arrowElement = document.createElement("span");

    cardContainerElement.appendChild(titleElement);
	cardContainerElement.appendChild(breakElement);
	cardContainerElement.appendChild(subElement);
	cardContainerElement.appendChild(textElement);
	cardContainerElement.appendChild(detailContainerElement);
	detailContainerElement.appendChild(detailsElement);
	detailContainerElement.appendChild(arrowElement);

	titleElement.textContent=card.title;
	subElement.textContent=card.sub;
	textElement.textContent=card.text;
	detailsElement.textContent="details";
	arrowElement.textContent="arrow_forward";
	

    titleElement.setAttribute("class", "cards-title");
    arrowElement.setAttribute("class", "material-symbols-outlined")
	
})