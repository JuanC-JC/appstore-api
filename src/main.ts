import { Server } from "./app/server";
import { config } from "./app/config/config";
import { validateConfigEnvs } from "./app/config/validateConfig";
import { healthRouter } from "./app/health/healthRoutes";


function main() {
	validateConfigEnvs()
	const server = new Server({ port: config.port, routes: [healthRouter] });
	server.start();
}

main()