'use strict';

const foregroundColor = '#eff0eb';
const backgroundColor = '#24242e';
const black = backgroundColor;
const slate = '#5b5a77';
const lightSlate = '#767594';
const blue = '#767594';
const orange = '#df671f';
const lightOrange = '#ff8c4a';
const gray = '#6a574c';
const brightBlack = '#6a574c';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#df671f',
		colors: [
			black,
			slate,
      lightSlate,
      blue,
			orange,
			lightOrange,
			gray,

			// bright
			brightBlack,
			slate,
      lightSlate,
      blue,
			orange,
			lightOrange,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(223, 103, 31, 0.25);
			}
		`
	});
};
