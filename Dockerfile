FROM node:18.16.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt update && apt upgrade -y

COPY . /usr/src/app/
RUN rm -rf node_modules
RUN npm install pm2 -g
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
RUN /root/.local/share/pnpm/pnpm install
RUN /root/.local/share/pnpm/pnpm build

EXPOSE 3000

CMD ["pm2-runtime", "start", ".output/server/index.mjs"]
