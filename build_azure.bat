call kubectl delete deploy frontend

call npm run build

call docker build -t frontend .

call docker tag frontend varasrinivas.azurecr.io/frontend

call docker image push varasrinivas.azurecr.io/frontend

call kubectl apply -f ./k8/deployment_azure.yaml