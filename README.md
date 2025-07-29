# Book Review App

A simple web application for displaying books and submitting reviews.

---

## Description

This project is a book review application consisting of a React frontend, a Flask backend API, and a PostgreSQL database.  
It is deployed on Kubernetes using YAML manifests for Deployments, Services, and Ingress.

---

## Features

- Display list of books
- Add book reviews
- Modern and fast user interface
- Full deployment on Kubernetes with Ingress and Postgres

---

## Requirements

- Docker
- Kubernetes cluster
- kubectl
- Postgres

---

## How to Run

1. Build Docker images:

```bash
docker build -t your-dockerhub-username/frontend:latest ./frontend
docker build -t your-dockerhub-username/backend:latest ./backend
docker build -t your-dockerhub-username/postgres:latest ./postgres


Push images to Docker Hub:

docker push your-dockerhub-username/frontend:latest
docker push your-dockerhub-username/backend:latest
docker push your-dockerhub-username/postgres:latest



Apply Kubernetes manifests:
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/postgres-deployment.yaml
kubectl apply -f k8s/postgres-service.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
kubectl apply -f k8s/ingress.yaml




Project Structure

├── backend/               # Backend code (Flask API)
├── frontend/              # Frontend code (React)
├── postgres/              # Database initialization scripts
├── k8s/                   # Kubernetes manifests
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── ingress.yaml
│   ├── namespace.yaml
│   └── postgres-deployment.yaml
└── README.md              # This documentation file





Open an issue for suggestions or bugs

Send a pull request with a clear description of changes

License
MIT License © 2025 mohammad alkhatib


