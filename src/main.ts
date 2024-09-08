import { Server } from "./app/server";
import { config } from "./app/config/config";
import { validateConfigEnvs } from "./app/config/validateConfig";
import { healthRouter } from "./app/routes/health.route";
import { dudaAppstoreRouter } from "./dudaAppstore/infrastructure/routes/dudaAppstore.route";


function main() {
	validateConfigEnvs()
	const routesV1 = [healthRouter, dudaAppstoreRouter]
	const server = new Server({ port: config.port, routes: routesV1 });
	server.start();
}

console.log("here")

main()