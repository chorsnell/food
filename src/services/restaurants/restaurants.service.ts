import { Request, Response } from "express";
import { MockRestaurants } from "./restaurants.mocks";
import { Restaurant } from "./restaurant.interface";
import {getConnection} from "typeorm";

/**
 * gets restaurants
 * @param req 
 * @param res 
 */
export const getRestaurants = async (req: Request, res: Response): Promise<void> => {
	// get repository
	let restaurantRepository = getConnection().getRepository(Restaurant);
	// find
	let restaurants = await restaurantRepository.find();
	// output json response
	res.json(restaurants);
};

/**
 * inserts a restaurant
 * @param req 
 * @param res 
 */
export const insertRestaurant = async (req: Request, res: Response): Promise<void> => {
	// create new 
	const restaurant = new Restaurant();
	// add data
	restaurant.name = "TypeScript";
	// save to the database
	await getConnection().manager.save(restaurant);
	// output json response
	res.json({"success": true});
};