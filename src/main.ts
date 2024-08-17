import { Server } from "./app/server";
import { config } from "./app/config/config";
import { validateConfigEnvs } from "./app/config/validateConfig";
import { healthRouter } from "./app/routes/health.route";


function main() {
	validateConfigEnvs()
	const routesV1 = [healthRouter]
	const server = new Server({ port: config.port, routes: routesV1 });
	server.start();
}

main()