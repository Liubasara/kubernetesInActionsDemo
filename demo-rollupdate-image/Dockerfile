# Dockerfile
# docker build -f Dockerfile -t demo-rollupdate-image .
# docker run -d --name demo-rollupdate-container demo-rollupdate-image
FROM node
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]