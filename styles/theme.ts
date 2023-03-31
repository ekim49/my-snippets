import { DefaultTheme } from 'styled-components';

const colors = {
	background: '#f7f7f7',
	black1: '#303030',
	lightgrey: '#e1e2e3',
	grey: '#BDBDBD',
	white: '#f5f5fa',
	blue1: '#03A9F4',
	blue2: '#2196F3',
	red: '#EF5350',
	green: '#66BB6A',
};

const fontSize = {
	logo: 25,
	title: 20,
	date: 16,
	text: 14,
	text_small: 12,
	footer: 10,
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

export const theme: DefaultTheme = {
	colors,
	fontSize,
};
