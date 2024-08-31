import { ClubModel } from "@src/modules/club-model";

const database: ClubModel[] = [
	{
		id: 1,
		name: "Manchester United",
		country: "England",
	},
	{
		id: 2,
		name: "Liverpool",
		country: "England",
	},
	{
		id: 3,
		name: "Real Madrid",
		country: "Spain",
	},
	{
		id: 4,
		name: "Barcelona",
		country: "Spain",
	},
	{
		id: 5,
		name: "Paris Saint-Germain",
		country: "France",
	},
	{
		id: 6,
		name: "Bayern Munich",
		country: "Germany",
	},
	{
		id: 7,
		name: "Juventus",
		country: "Italy",
	},
	{
		id: 8,
		name: "Inter Milan",
		country: "Italy",
	},
	{
		id: 9,
		name: "Chelsea",
		country: "England",
	},
	{
		id: 10,
		name: "Atletico Madrid",
		country: "Spain",
	},
	{
		id: 11,
		name: "Borussia Dortmund",
		country: "Germany",
	},
	{
		id: 12,
		name: "Porto",
		country: "Portugal",
	},
	{
		id: 13,
		name: "Ajax",
		country: "Netherlands",
	},
	{
		id: 14,
		name: "AC Milan",
		country: "Italy",
	},
	{
		id: 15,
		name: "Tottenham Hotspur",
		country: "England",
	},
	{
		id: 16,
		name: "RB Leipzig",
		country: "Germany",
	},
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
	return database;
};
