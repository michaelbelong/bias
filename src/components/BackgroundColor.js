import { useState, useEffect } from 'react';

const bgc = {
  green: '#00FF46',
  blue: '#0075FF',
  orange: '#FF7F00',
  yellow: '#FFFF00',
  chartreuse: '#B5FF00',
  pink: '#FF00C4',
  darkback: '#192817',
  grey: '#AAAAAA'
};

const colors = Object.values(bgc);
const images = [
  "../bgimages/Punk-Mother-Mars-Tile.png",
  "url('../bgimages/Punk-Mother-Mars-Tile.png')",
  "url('../bgimages/Punk-Mother-Mars-Tile.png')",
  "url('../bgimages/Punk-Mother-Mars-Tile.png')",
];

const ColorSelector = () => {
  const [selectedValue, setSelectedValue] = useState({
	type: "color",
	value: colors[Math.floor(Math.random() * colors.length)]
  });

  useEffect(() => {
	const handleKeyPress = (event) => {
	  if (document.activeElement.tagName === 'TEXTAREA') return;
	  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
		if (selectedValue.type === "color") {
		  const currentIndex = colors.indexOf(selectedValue.value);
		  const nextIndex = event.key === 'ArrowRight' 
			? (currentIndex + 1) % colors.length
			: (currentIndex - 1 + colors.length) % colors.length;
		  setSelectedValue({ type: "color", value: colors[nextIndex] });
		}
	  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
		if (selectedValue.type === "image") {
		  const currentIndex = images.indexOf(selectedValue.value);
		  const nextIndex = event.key === 'ArrowUp'
			? (currentIndex - 1 + images.length) % images.length
			: (currentIndex + 1) % images.length;
		  setSelectedValue({ type: "image", value: images[nextIndex] });
		}
	  }
	};
	window.addEventListener("keydown", handleKeyPress);
	return () => {
	  window.removeEventListener("keydown", handleKeyPress);
	};
  }, [selectedValue]);

  return selectedValue;
};

export default ColorSelector;
