call kubectl delete deploy frontend

call npm run build

call docker build -t frontend .

call docker tag frontend localhost:5000/frontend

call docker image push localhost:5000/frontend

call kubectl apply -f ./k8/deployment.yaml