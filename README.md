# Products Management

A full-stack web application for managing products, built with Spring Boot (Java) for the backend and React (Vite) for the frontend.

## Technical stack

- **Backend:** Spring Boot (Java), Spring Data JPA, MYSQL, Maven, **Mockito**
- **Frontend:** React (Vite), JSX, Axios, **Material UI**
- **API:** RESTful endpoints with JSON
- **Testing:** JUnit (backend), React Testing Library (frontend)
- **Containerization**: Docker Compose

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

- Docker Desktop and Docker Compose

or ( If you want to run the project manually )

- Java 17+ and Maven (for backend)
- Node.js 18+ and npm (for frontend)

---

## Using Docker

position yourself at the root folder and run "docker-compose up --build"

## Manually

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

- `GET /products` - List all products
- `POST /products` - Add a new product
- `PUT /products/{id}` - Update a product
- `DELETE /products/{id}` - Delete a product

## Folder Overview

- `backend/src/main/java/com/ilyas/productmanagement/` - Java source code
- `frontend/src/components/` - Contains UI components such as `ProductList` and `ProductForm`
- `frontend/src/components/shared/` - Shared components like generic modals and toast notifications
- `frontend/src/service/` - Handles REST API calls using Axios
