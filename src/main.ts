import { Server } from "./app/server";
import { config } from "./app/config/config";
import { validateConfigEnvs } from "./app/config/validateConfig";
import { healthRouter } from "./app/routes/health.route";
import { dudaAppstoreRouter } from "./dudaAppstore/infrastructure/routes/dudaAppstore.route";
import { MongooseConection } from "./shared/infrastructure/MongooseClient";


function main() {
	// validateConfigEnvs()
	const routesV1 = [healthRouter, dudaAppstoreRouter]
	const db = MongooseConection.getInstance(config.mongoUri)
	const server = new Server({ port: config.port, routes: routesV1 });
	server.start();
}

main()