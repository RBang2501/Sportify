<img src="https://www.linkpicture.com/q/sportify-logo.png" alt="Sportify logo" title="Sportify" align="right" height="60" />

# Sports Tournament Management System
![Commits](https://img.shields.io/github/commit-activity/m/RBang2501/Sportify?style=social)
![Forks](https://img.shields.io/github/forks/RBang2501/Sportify?style=social)

## Table Of Content
- [Introduction](#introduction)
- [Technology Used](#techused)
- [Installation](#Installation)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Docker](#docker)
    - [Kubernetes](#kubernetes)
- [Links](#links)

## Introduction
The Sports Tournament Management System is a web application built to manage sports tournaments. It provides a user-friendly interface for organizers to create, manage, and track sports events efficiently. The project uses ReactJS for the frontend, Spring Boot for the backend, and implements JWT authorization for secure user access.

## Technologies Used

- Frontend: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" alt="ReactJS" height="60" />

- Backend:
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/768px-Spring_Boot.svg.png?20230616230349" alt="Spring-boot" width="60" height="60" style="margin-right: 20px;" /><img src="https://www.svgrepo.com/show/353735/firebase.svg" alt="Firebase" height="60" />
- Authentication: <img src="https://jwt.io/img/logo-asset.svg" alt="Jwt" height="60" style="margin-right: 20px;" />

- Deployment:
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/915px-Docker_%28container_engine%29_logo.svg.png?20161017201350" alt="Docker" height="60" style="margin-right: 20px;" /><img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" height="60" />


## Installation & Setup

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

## Features
- **Admin Side**
    - Signup and Login with JWT Authorization: Administrators can register and log in securely using JSON Web Tokens (JWT) to manage the sports tournaments effectively.
    - Adding Different Sports to the Tournament: The Admin can add various sports to the tournament, providing options for a diverse range of sports events.

- **SPOC Side**
    - Signup and Login with JWT Authorization: SPOCs can sign up and log in using JWT authentication for secure access.
    - Creating and Updating Fixtures of Games: SPOCs have the privilege to create and update fixtures for games, ensuring proper scheduling and avoiding conflicts.
    - Live score updating of ongoing games: SPOCs can update the score of the ongoing game.

- **Player Side**
    - Signup and Login with JWT Authorization: Players can register and log in securely using JWT tokens to participate in the tournament.
    - Viewing Fixtures of Games: Players can access and view the fixtures of games, allowing them to be informed about upcoming matches and schedules.
    - Viewing Scores of Games: Players can view the scores of ongoing matches and past matches.

## Future Scope
The following features could be added to enhance the Sports Tournament Management System:
- Notification system for instant communication between organizers and participants.
- Team management functionalities, such as team registration and player roster management.
- Data analytics and visualization tools to gain insights into tournament performance.
