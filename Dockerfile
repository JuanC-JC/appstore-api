FROM registry.access.redhat.com/ubi8/nodejs-20
# node:20

RUN npm i -g pnpm

LABEL name=appstore version=latest

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

# # RUN if [ -d "src/common" ]; then \
# #         echo "El directorio 'common' existe."; \
# #     else \
# #         echo "El directorio 'common' no existe."; \
# #     fi


# RUN chown -Rh $user:$user /app
# USER $user


EXPOSE 9005

CMD [ "pnpm", "start" ]