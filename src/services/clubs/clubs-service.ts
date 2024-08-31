import * as ClubsRepository from "@src/repositories/clubs-repository";
import * as HttpResponse from "@src/utils/http-helpers";

export const getClubsData = async () => {
	const data = await ClubsRepository.findAllClubs();

	let response = null;

	if (!data) {
		response = await HttpResponse.noContent();
	} else {
		response = await HttpResponse.ok(data);
	}

	return response;
};
