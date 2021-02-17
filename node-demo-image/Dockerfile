# Dockerfile
# docker build -f Dockerfile -t k8s-node-demo-image .
# docker run -d --name k8s-node-demo-container k8s-node-demo-image
FROM node
ADD app-unhealth.js /app.js
ENTRYPOINT ["node", "app.js"]
