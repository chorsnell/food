import { Menu, Menus } from "./menus.interface";

/** sets defaults for install address mock */
const getMenuDefault = () => ({
	'id': 1,
	'name': 'Godfathers',
	'type': 'main',
	'price': 9.99,
	'parent': 1,
});

/** installation address mock that allows overwriting of specific properties with partials */
/** For posterity, nice article on this here - https://itnext.io/mocking-in-typescript-a97267f7cea9 */
export const getMenuMock = (a?: Partial<Menu>): Menu => ({
	...getMenuDefault(),
	...a
});

/** Exports the evaluation of getInstallAddressMock */
export let MockMenus = [
	getMenuMock(),
	getMenuMock({name: 'Corleones'}),
	getMenuMock({name: 'Don Michaels'}),
	getMenuMock({name: 'Vitos Pizza'}),

];
