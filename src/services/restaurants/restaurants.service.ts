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
 * gets a restaurant
 * @param req 
 * @param res 
 */
export const getRestaurant = async (req: Request, res: Response): Promise<void> => {
	// get repository
	let restaurantRepository = getConnection().getRepository(Restaurant);
	// find
	let restaurant = await restaurantRepository.findOne(req.params.id);
	// output json response
	res.json(restaurant);
};

/**
 * inserts a restaurant
 * @param req 
 * @param res 
 */
export const insertRestaurant = async (req: Request, res: Response): Promise<void> => {
	// TODO validate req.body data
	// create new 
	let restaurant = new Restaurant();
	// add data
	restaurant.name = req.body.name;
	restaurant.postCode = req.body.postCode;
	restaurant.town = req.body.town;
	restaurant.cuisine = req.body.cuisine;
	// save to the database
	await getConnection().manager.save(restaurant);
	// output json response
	res.json({"success": restaurant});
};

/**
 * updates a restaurant
 * @param req 
 * @param res 
 */
export const updateRestaurant = async (req: Request, res: Response): Promise<void> => {
	// TODO validate req.body data
	// get repository
	let restaurantRepository = getConnection().getRepository(Restaurant);
	// find existing restaurant
	let restaurant = await restaurantRepository.findOne(req.params.id);
	// add data
	restaurant.name = req.body.name;
	restaurant.postCode = req.body.postCode;
	restaurant.town = req.body.town;
	restaurant.cuisine = req.body.cuisine;
	// save to the database
	await restaurantRepository.save(restaurant);
	// output json response
	res.json({"success": restaurant});
};