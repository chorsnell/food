import { Request, Response } from "express";
import { MockRestaurants } from "./restaurants.mocks";

export const getRestaurants = async (req: Request, res: Response) => {
	res.json(MockRestaurants)
};