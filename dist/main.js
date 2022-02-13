"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const configuration_1 = require("./config/configuration");
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('espacios_academicos_crud')
        .setDescription('API CRUD para la gestion de espacios académicos en el registro de notas')
        .setVersion('1.0')
        .addTag('espacio_academico')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    fs.writeFileSync("./swagger.json", JSON.stringify(document));
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(parseInt(configuration_1.environment.HTTP_PORT, 10) || 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map