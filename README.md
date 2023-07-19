<img src="https://aimeos.org/fileadmin/template/icons/logo.png" alt="Sportify logo" title="Sportify" align="right" height="60" />

# Sports Tournament Management System
![Commits](https://img.shields.io/github/commit-activity/m/RBang2501/Sportify?style=social)
![Forks](https://img.shields.io/github/forks/RBang2501/Sportify?style=social)

The Sports Tournament Management System is a web application built to manage sports tournaments. It provides a user-friendly interface for organizers to create, manage, and track sports events efficiently. The project uses ReactJS for the frontend, Spring Boot for the backend, and implements JWT authorization for secure user access.
## Table Of Content
- [Technology Used](#techused)
- [Installation](#Installation)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Docker](#docker)
    - [Kubernetes](#kubernetes)
- [Links](#links)

## Technologies Used

- Frontend:
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" alt="ReactJS" width="60" height="60" />

- Backend:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/768px-Spring_Boot.svg.png?20230616230349" alt="Spring-boot" width="60" height="60" style="margin-right: 20px;" /><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase" height="60" />
- Authentication: JWT (JSON Web Tokens)
- Deployment: Kubernetes and Docker

## Installation

Follow these steps to set up the Sports Tournament Management System locally:

1. Clone the repository:

```bash
git clone https://github.com/RBang2501/Sportify.git
cd Sportify
```
2. Frontend:
```bash
cd frontend
npm install
```

3. Backend:
```bash
cd backend
# Set up your database configuration in application.properties
# Make sure you have JDK and Maven installed
mvn spring-boot:run
```
4. Docker and Kubernetes:
- Install Docker Desktop by downloading it from the Docker website: https://www.docker.com/products/docker-desktop
- Once installed, open Docker Desktop, go to Settings > Kubernetes, and check "Enable Kubernetes."
- Docker Desktop will install Kubernetes and set up a local cluster for you.

