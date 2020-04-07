import { Request, Response } from "express";
import { MockMenus } from "./menus.mocks";
import { Menu } from "./menus.interface";
import {getConnection} from "typeorm";

/**
 * gets a menu
 * @param req 
 * @param res 
 */
export const getMenu = async (req: Request, res: Response): Promise<void> => {
	// get repository
	let menuRepository = getConnection().getRepository(Menu);
	// find
	let menu = await menuRepository.findOne(req.params.id);
	// output json response
	res.json(menu);
};