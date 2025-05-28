# trakk – Event Tracking API with NestJS + MongoDB

**trakk** is a lightweight and scalable API for collecting and storing custom events from web and mobile applications. Built with **NestJS** and **MongoDB**, it allows seamless tracking of user actions such as page views, clicks, and interactions for future analytics and reporting.

## Tech Stack

- **NestJS** – TypeScript-based Node.js framework  
- **MongoDB (Atlas)** – NoSQL database for event storage  
- **Mongoose** – ODM for MongoDB integration  
- **class-validator + ValidationPipe** – Automatic data validation  
- **Docker** *(optional)* – For isolated development environments  

## Core Features

- Register new events via `POST /events`  
- Retrieve all events via `GET /events`  
- Input validation using DTOs  
- Supports cloud (MongoDB Atlas) and local MongoDB  
- Modular architecture for easy scalability (EventModule)  

## Sample Payload

```json
{
  "userId": "abc123",
  "eventType": "page_view",
  "timestamp": "2025-05-27T20:00:00Z",
  "metadata": {
    "pageUrl": "https://example.com",
    "device": "mobile"
  }
}
