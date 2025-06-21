# Products Management

A full-stack web application for managing products, built with Spring Boot (Java) for the backend and React (Vite) for the frontend.

## Technical stack
- **Backend:** Spring Boot (Java), Spring Data JPA, MYSQL, Maven
- **Frontend:** React (Vite), JSX, Axios, *Material UI*
- **API:** RESTful endpoints with JSON
- **Build Tools:** Maven (backend), npm (frontend)
- **Testing:** JUnit (backend), React Testing Library (frontend)
- **Containerization**: 

## Features

- CRUD for products
- 
- React Router for navigation.
- Modular code structure

## Project Structure

```
products-management/
│
├── backend/   # Spring Boot backend (Java)
│   └── ...
│
└── frontend/  # React frontend (Vite)
    └── ...
```

## Getting Started

### Prerequisites

- Java 17+ and Maven (for backend)
- Node.js 18+ and npm (for frontend)

---

### Backend Setup

1. Navigate to the backend directory:
   ```powershell
   cd backend
   ```

2. Build and run the Spring Boot application:
   ```powershell
   ./mvnw spring-boot:run
   ```
   The backend will start on [http://localhost:8080](http://localhost:8080).

---

### Frontend Setup

1. Navigate to the frontend directory:
   ```powershell
   cd frontend
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start the development server:
   ```powershell
   npm run dev
   ```
   The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## API Endpoints

- `GET /api/products` - List all products
- `POST /api/products` - Add a new product
- `PUT /api/products/{id}` - Update a product
- `DELETE /api/products/{id}` - Delete a product

## Folder Overview

- `backend/src/main/java/com/ilyas/productmanagement/` - Java source code
- `frontend/src/` - React components, models, and services

## License

This project is licensed under the MIT License.
