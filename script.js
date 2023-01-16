const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
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
beers.cards.map((card, index) => {
    const cardContainerElement = document.createElement("div");
    cardContainerElement.setAttribute("class", "card-container");
    cardsContainerElement.appendChild(cardContainerElement);
	const numberElement = document.createElement("div");
    const titleElement = document.createElement("div");
	const breakElement= document.createElement("hr");
	const subElement=document.createElement("div");
	const textElement=document.createElement("div");
	const detailContainerElement=document.createElement("div");
	const detailsElement = document.createElement("div");
	const arrowElement = document.createElement("span");
	const emptyElement = document.createElement("div");

	cardContainerElement.appendChild(numberElement);
    cardContainerElement.appendChild(titleElement);
	cardContainerElement.appendChild(breakElement);
	cardContainerElement.appendChild(subElement);
	cardContainerElement.appendChild(textElement);
	cardContainerElement.appendChild(detailContainerElement);
	detailContainerElement.appendChild(emptyElement);
	detailContainerElement.appendChild(detailsElement);
	detailContainerElement.appendChild(arrowElement);

	numberElement.textContent=index+1;
	titleElement.textContent=card.title;
	subElement.textContent=card.sub;
	textElement.textContent=card.text;
	detailsElement.textContent="details";
	arrowElement.textContent="arrow_forward";
	
	numberElement.setAttribute("class", "cards-number");
    titleElement.setAttribute("class", "cards-title");
	subElement.setAttribute("class", "cards-sub");
	textElement.setAttribute("class", "cards-text");
	detailContainerElement.setAttribute("class", "cards-details-container");
    arrowElement.setAttribute("class", "material-symbols-outlined size-36");
	
})