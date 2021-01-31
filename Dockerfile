# build
FROM node:latest as build_stage
WORKDIR /
COPY . . 
RUN npm cache clean --force
RUN npm i
RUN npm run build

# only use built app
FROM nginx:1.19.4 as final_stage
COPY --from=build_stage /build/ /usr/share/nginx/html
COPY --from=build_stage /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443