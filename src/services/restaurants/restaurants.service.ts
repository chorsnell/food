import { Request, Response } from "express";

export const getRestaurants = async (req: Request, res: Response) => {
    res.send('Pardon me, do you have any Grey Poupon?');
};