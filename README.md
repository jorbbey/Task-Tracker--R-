

---

# JSON Server Setup

This branch contains the setup for a simple **JSON Server** that can be used as a mock REST API for development or testing purposes.

## Purpose

The `json-server` branch provides an easy-to-use API server using **JSON Server**. It can be used to simulate a backend server, allowing you to mock endpoints like `GET`, `POST`, `PUT`, and `DELETE` for testing or frontend development without the need for a real backend.

## Files Included

- **`db.json`**: Contains the data structure that JSON Server will serve. Currently, it includes an empty list of posts as an example.
- **`package.json`**: Contains project metadata and dependencies, including `json-server`. It also defines a `start` script to launch the server.

## Getting Started

To run the JSON server locally, follow the steps below.

### Prerequisites

- Node.js (version 12 or higher)
- npm (or Yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project folder:
   ```bash
   cd your-repository
   ```

3. Checkout to the `json-server` branch:
   ```bash
   git checkout json-server
   ```

4. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

To start the server, run:

```bash
npm start
```

This will start the server and watch for changes in `db.json`. By default, the server will run on port `3001`.

You can now access the mock API at:

- `GET /posts` - Fetch all posts
- `GET /posts/{id}` - Fetch a specific post by ID
- `POST /posts` - Create a new post
- `PUT /posts/{id}` - Update an existing post
- `DELETE /posts/{id}` - Delete a post by ID

### Example Request

To test the mock API, you can use tools like **Postman** or **cURL** to make requests to the server.

Example of a `GET` request to fetch all posts:

```bash
curl http://localhost:3001/posts
```

### Customizing the Data

- Modify the `db.json` file to change the data structure or add new entities.
- Once you've made changes to `db.json`, the server will automatically reload the data.

## Deployment

To deploy this JSON server to a cloud service like **Heroku** or **Render**, follow the respective platform's deployment instructions for Node.js applications. Ensure that the `start` script is properly set up in `package.json` to run the server.

---

### **Summary**

This README provides the necessary information to get the **JSON Server** running locally and how to interact with the mock API. Feel free to adjust the instructions and data structure as per your needs.

---
