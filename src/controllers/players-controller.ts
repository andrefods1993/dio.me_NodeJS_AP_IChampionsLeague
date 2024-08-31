import { PlayerModel } from "@src/modules/player-model";
import * as PlayersService from "@src/services/players/players-service";
import { Request, Response } from "express";

export const getPlayers = async (req: Request, res: Response) => {
	const HttpResponse = await PlayersService.getPlayersData();

	res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const getPlayersById = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const HttpResponse = await PlayersService.getPlayersDataById(id);
	res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
	const player = req.body;
	const httpResponse = await PlayersService.postPlayerData(player);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const httpResponse = await PlayersService.deletePlayerData(id);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const patchPlayer = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const player: PlayerModel = req.body;
	const httpResponse = await PlayersService.patchPlayerData(id, player);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};
