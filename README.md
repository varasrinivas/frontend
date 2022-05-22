# USEFUL LINKS

https://stackoverflow.com/questions/45724320/kubernetes-access-back-end-api-from-angular
Ingress related commands:

# Get the resource group name of the AKS cluster 
az aks show --resource-group istio-poc --name istio-poc --query nodeResourceGroup -o tsv

# TEMPLATE - Create a public IP address with the static allocation
az network public-ip create --resource-group MC_istio-poc_istio-poc_centralus --name myAKSPublicIPForIngress --sku Standard --allocation-method static --query publicIp.ipAddress -o tsv

public ip:23.99.197.82



helm install ingress-nginx ingress-nginx/ingress-nginx --namespace ingress-basic --set controller.replicaCount=2 --set controller.nodeSelector."beta\.kubernetes\.io/os"=linux --set defaultBackend.nodeSelector."beta\.kubernetes\.io/os"=linux --set controller.service.externalTrafficPolicy=Local --set controller.service.loadBalancerIP="23.99.197.82"


# REPLACE - Create Public IP: Replace Resource Group value
az network public-ip create --resource-group MC_istio-poc_istio-poc_centralus --name myAKSPublicIPForIngress --sku Standard --allocation-method static --query publicIp.ipAddress -o tsv
azure aks login:
az aks get-credentials --resource-group istio-poc --name istio-poc

connecting aks with acr
https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration?tabs=azure-cli

az aks update -n istio-poc -g istio-poc --attach-acr varasrinivas

running registry locally
docker run -d -p 5000:5000 --name registry registry:2.7

To push images to azure container service

az login
az acr login --name varasrinivas


#ROllout

kubectl rollout restart deploy backend
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
