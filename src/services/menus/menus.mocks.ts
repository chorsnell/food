import { Menu, Menus } from "./menus.interface";

// default menu
const getMenuDefault = () => ({
	'id': Math.floor(Math.random() * 1000000) + 1,
	'name': 'Pizza',
	'type': 'main',
	'price': 9.99
});

// mock that allows overwriting of specific properties with partials
// For posterity, nice article on this here - https://itnext.io/mocking-in-typescript-a97267f7cea9
export const getMenuMock = (a?: Partial<Menu>): Menu => ({
	...getMenuDefault(),
	...a
});

// exports mock menu items
export let MockMenus = [
	getMenuMock(),
	getMenuMock({name: 'Spagetti'}),
	getMenuMock({name: 'Lasagne'}),
	getMenuMock({name: 'Calzone'}),

];
