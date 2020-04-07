import { Restaurant, Restaurants } from "./restaurant.interface";

/** sets defaults for install address mock */
const getRestaurantDefault = () => ({
	'id': 1,
	'name': 'Godfathers',
	'postCode': 'MK11 1AB',
	'town': 'Milton Keynes',
	'cuisine': 'Italian'
});

/** installation address mock that allows overwriting of specific properties with partials */
/** For posterity, nice article on this here - https://itnext.io/mocking-in-typescript-a97267f7cea9 */
export const getRestaurantMock = (a?: Partial<Restaurant>): Restaurant => ({
	...getRestaurantDefault(),
	...a
});

/** Exports the evaluation of getInstallAddressMock */
export let MockRestaurants = [
	getRestaurantMock(),
	getRestaurantMock({name: 'Corleones'}),
	getRestaurantMock({name: 'Don Michaels'}),
	getRestaurantMock({name: 'Vitos Pizza'}),

];
