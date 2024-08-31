import { HttpResponse } from "@src/modules/http-response-model";
import { PlayerModel } from "@src/modules/player-model";

export const ok = async (data: any): Promise<HttpResponse> => {
	return {
		statusCode: 200,
		body: data,
	};
};

export const created = async (data: PlayerModel): Promise<HttpResponse> => {
	return {
		statusCode: 201,
		body: data,
	};
};

export const noContent = async (): Promise<HttpResponse> => {
	return {
		statusCode: 204,
		body: null,
	};
};

export const badRequest = async (message: string): Promise<HttpResponse> => {
	return {
		statusCode: 400,
		body: message,
	};
};
