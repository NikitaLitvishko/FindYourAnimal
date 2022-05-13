# FindYourAnimal

## Specification

---

### Context

The aim of the project is to help homeless animals. The platform will be a place of interaction between people who own a pet in need of shelter and people who are interested in finding a pet. The availability of such a service will significantly speed up and facilitate the search.

Implementation - website.

"FindYourAnimal" will be deployed on a virtual machine in AWS using the AWS CodeDeploy service.

Technology stack:
- Node.js
- Express
- PostgreSQL

### Tasks

The project solves the following tasks:

- A person's search for a pet that he wants to take.

Additional fault tolerance requirements:

- The service of the animal retrieval service should not be disrupted by failures, delays, or lack of Internet connection. If the connection is lost, the service enters the offline mode of accumulation of input data until the connection is restored.

---

### Requirements

The project can be used by both human and animal users

Functions available to the human user:

- User registration
- Authorization
- Send a chat message
- Search for animals

