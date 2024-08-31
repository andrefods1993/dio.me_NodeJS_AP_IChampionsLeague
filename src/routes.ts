import { Router } from "express";
import * as PlayersController from "@src/controllers/players-controller";
import * as ClubsController from "@src/controllers/clubs-controller";

const router = Router();

router.get("/players", PlayersController.getPlayers);

router.post("/players", PlayersController.postPlayer);

router.delete("/players/:id", PlayersController.deletePlayer);

router.get("/players/:id", PlayersController.getPlayersById);

router.patch("/players/:id", PlayersController.patchPlayer);

router.get("/clubs", ClubsController.getClubs);

export default router;
