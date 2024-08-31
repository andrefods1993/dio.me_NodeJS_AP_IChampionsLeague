import { PlayerModel } from "@src/modules/player-model";

const database: PlayerModel[] = [
	{
		id: 1,
		name: "Karim Benzema",
		club: "Real Madrid",
		nationality: "French",
		position: "Forward",
		statistics: {
			overall: 89,
			pace: 77,
			shooting: 88,
			passing: 83,
			dribbling: 85,
			defending: 35,
			physical: 81,
		},
	},
	{
		id: 2,
		name: "Luka Modric",
		club: "Real Madrid",
		nationality: "Croatian",
		position: "Midfielder",
		statistics: {
			overall: 90,
			pace: 72,
			shooting: 76,
			passing: 91,
			dribbling: 87,
			defending: 62,
			physical: 72,
		},
	},
	{
		id: 3,
		name: "Sergio Ramos",
		club: "Real Madrid",
		nationality: "Spanish",
		position: "Defender",
		statistics: {
			overall: 88,
			pace: 76,
			shooting: 62,
			passing: 80,
			dribbling: 70,
			defending: 90,
			physical: 85,
		},
	},
	{
		id: 4,
		name: "Toni Kroos",
		club: "Real Madrid",
		nationality: "German",
		position: "Midfielder",
		statistics: {
			overall: 89,
			pace: 65,
			shooting: 78,
			passing: 90,
			dribbling: 83,
			defending: 62,
			physical: 70,
		},
	},
	{
		id: 5,
		name: "Vinicius Junior",
		club: "Real Madrid",
		nationality: "Brazilian",
		position: "Winger",
		statistics: {
			overall: 87,
			pace: 92,
			shooting: 81,
			passing: 77,
			dribbling: 89,
			defending: 35,
			physical: 76,
		},
	},
	{
		id: 6,
		name: "Eder Militao",
		club: "Real Madrid",
		nationality: "Brazilian",
		position: "Defender",
		statistics: {
			overall: 86,
			pace: 81,
			shooting: 50,
			passing: 70,
			dribbling: 68,
			defending: 87,
			physical: 82,
		},
	},
	{
		id: 7,
		name: "Thibaut Courtois",
		club: "Real Madrid",
		nationality: "Belgian",
		position: "Goalkeeper",
		statistics: {
			overall: 91,
			pace: 50,
			shooting: 20,
			passing: 60,
			dribbling: 50,
			defending: 85,
			physical: 90,
		},
	},
	{
		id: 8,
		name: "Marco Asensio",
		club: "Real Madrid",
		nationality: "Spanish",
		position: "Winger",
		statistics: {
			overall: 85,
			pace: 83,
			shooting: 80,
			passing: 79,
			dribbling: 84,
			defending: 40,
			physical: 73,
		},
	},
	{
		id: 9,
		name: "Casemiro",
		club: "Real Madrid",
		nationality: "Brazilian",
		position: "Midfielder",
		statistics: {
			overall: 87,
			pace: 72,
			shooting: 74,
			passing: 78,
			dribbling: 72,
			defending: 88,
			physical: 85,
		},
	},
	{
		id: 10,
		name: "Ferland Mendy",
		club: "Real Madrid",
		nationality: "French",
		position: "Defender",
		statistics: {
			overall: 84,
			pace: 89,
			shooting: 60,
			passing: 74,
			dribbling: 80,
			defending: 82,
			physical: 77,
		},
	},
	{
		id: 11,
		name: "David Alaba",
		club: "Real Madrid",
		nationality: "Austrian",
		position: "Defender",
		statistics: {
			overall: 85,
			pace: 77,
			shooting: 65,
			passing: 80,
			dribbling: 75,
			defending: 83,
			physical: 76,
		},
	},
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
	return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
	return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
	database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
	const index = database.findIndex((p) => p.id === id);
	if (index !== -1) {
		database.splice(index, 1);
		return true;
	} else {
		return false;
	}
};

export const updateOnePlayer = async (id: number, player: PlayerModel) => {
	const playerIndex = database.findIndex((p) => p.id === id);
	if (playerIndex !== -1) {
		database[playerIndex] = player;
		return database[playerIndex];
	} else {
		return false;
	}
};
