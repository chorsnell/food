import { Request, Response } from "express";
import { MockMenus } from "./menus.mocks";
import { Menu } from "./menus.interface";
import {getConnection} from "typeorm";
import { Restaurant } from "../restaurants/restaurant.interface";

/**
 * gets a menu based on restaurant id
 * @param req 
 * @param res 
 */
export const getMenu = async (req: Request, res: Response): Promise<void> => {
	// get repository
	let menuRepository = getConnection().getRepository(Menu);
	// find
	let menu = await menuRepository.find({where: {parent: req.params.id}});
	// output json response
	res.json(menu);
};

/**
 * inserts a menu
 * @param req 
 * @param res 
 */
export const insertMenu = async (req: Request, res: Response): Promise<void> => {
	// TODO validate req.body data
	// get entity repositories
    let restaurantRepository = getConnection().getRepository(Restaurant);
	let menuRepository = getConnection().getRepository(Menu);
	// get parent
	let restaurant = await restaurantRepository.findOne(req.params.id);
	// create new 
	let menu = new Menu();
	// add data
	menu.name = req.body.name;
	menu.type = req.body.type;
	menu.price = req.body.price;
	menu.parent = restaurant;
	// save to the database
	await menuRepository.save(menu);
	// output json response
	res.json({"success": menu});
};