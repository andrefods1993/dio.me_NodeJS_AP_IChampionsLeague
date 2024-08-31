import { PlayerModel } from "@src/modules/player-model";
import * as PlayersRepository from "@src/repositories/players-repository";
import * as HttpResponse from "@src/utils/http-helpers";

export const getPlayersData = async () => {
	const data = await PlayersRepository.findAllPlayers();

	let response = null;

	if (!data) {
		response = await HttpResponse.noContent();
	} else {
		response = await HttpResponse.ok(data);
	}

	return response;
};

export const getPlayersDataById = async (id: number) => {
	const data = await PlayersRepository.findPlayerById(id);

	let response = null;

	if (!data) {
		response = await HttpResponse.noContent();
	} else {
		response = await HttpResponse.ok(data);
	}

	return response;
};

export const postPlayerData = async (player: PlayerModel) => {
	let response = null;

	if (Object.keys(player).length === 0) {
		response = await HttpResponse.badRequest("Did not fill in all the player data.");
	} else {
		await PlayersRepository.insertPlayer(player);
		response = await HttpResponse.created(player);
	}

	return response;
};

export const deletePlayerData = async (id: number) => {
	let response = null;
	const isDeleted = await PlayersRepository.deleteOnePlayer(id);

	!isDeleted
		? (response = await HttpResponse.badRequest(`Player ${id} not found`))
		: (response = await HttpResponse.ok(`Player ${id} deleted`));
	return response;
};

export const patchPlayerData = async (id: number, player: PlayerModel) => {
	let response = null;
	const isUpdated = await PlayersRepository.updateOnePlayer(id, player);
	!isUpdated
		? (response = await HttpResponse.badRequest(`Player ${id} not found`))
		: (response = await HttpResponse.ok(isUpdated));
	return response;
};
