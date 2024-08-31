import { Request, Response } from "express";
import * as ClubsService from "@src/services/clubs/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
	const HttpResponse = await ClubsService.getClubsData();

	res.status(HttpResponse.statusCode).json(HttpResponse.body);
};
