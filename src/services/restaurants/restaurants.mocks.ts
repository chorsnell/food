import { Restaurant, Restaurants } from "./restaurant.interface";
import { MockMenus } from "../menus/menus.mocks";

// default restaurant
const getRestaurantDefault = () => ({
	'id': 1,
	'name': 'Godfathers',
	'postCode': 'MK11 1AB',
	'town': 'Milton Keynes',
	'cuisine': 'Italian',
	'menu': MockMenus
});

// mock that allows overwriting of specific properties with partials
// For posterity, nice article on this here - https://itnext.io/mocking-in-typescript-a97267f7cea9
export const getRestaurantMock = (a?: Partial<Restaurant>): Restaurant => ({
	...getRestaurantDefault(),
	...a
});

// exports mock menu items
export let MockRestaurants = [
	getRestaurantMock(),
	getRestaurantMock({id: 2, name: 'Corleones'}),
	getRestaurantMock({id: 3, name: 'Don Michaels'}),
	getRestaurantMock({id: 4, name: 'Vitos Pizza'}),
	getRestaurantMock({id: 6, name: 'Poppa Pizza'}),
	getRestaurantMock({id: 7, name: 'Mad Pizza'}),
];
