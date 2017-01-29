'use strict'

const foregroundColor = '#eff0eb'
const backgroundColor = '#24242e'
const black = backgroundColor
const slate = '#5b5a77'
const lightSlate = '#767594'
const blue = '#767594'
const orange = '#df671f'
const lightOrange = '#ff8c4a'
const gray = '#6a574c'
const brightBlack = '#6a574c'
const brightWhite = foregroundColor

const colors = {
	black: black,
	red: slate,
	green: lightSlate,
	yellow: blue,
	blue: orange,
	magenta: lightOrange,
	cyan: gray,
	white: foregroundColor,
	lightBlack: brightBlack,
	lightRed: slate,
	lightGreen: lightSlate,
	lightYellow: blue,
	lightBlue: orange,
	lightMagenta: lightOrange,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: orange,
		colors: colors,
		css: `
			${config.css || ''}
            .tab_tab {
                border: 0;
            }
            .tab_textActive {
                border-bottom: 2px solid ${oragne};
            }
		`
	})
}

exports.middleware = () => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = orange
      action.config.colors = colors
  }
  next(action)
}
