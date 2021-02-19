# Dockerfile
# docker build -f Dockerfile -t demo-statefulset-node-image .
# docker run -d --name demo-statefulset-node-container demo-statefulset-node-image
FROM node
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]
