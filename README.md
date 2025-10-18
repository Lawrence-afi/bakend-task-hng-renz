# 👤 MeAPI: Personalized Info & Cat Facts Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Overview
This is a minimalist Node.js Express backend service designed to provide personal information combined with a random cat fact fetched from an external API. It incorporates essential features like CORS handling and API rate limiting for robust performance.

## Features
- **Express.js**: Powers the robust and efficient API server.
- **Axios**: Handles asynchronous HTTP requests for fetching external data.
- **CORS**: Manages Cross-Origin Resource Sharing for secure frontend integration.
- **Express-Rate-Limit**: Implements request throttling to prevent abuse and ensure service stability.

## Getting Started

To get this project up and running on your local machine, follow these simple steps.

### Installation

1.  📥 **Clone the Repository**:
    ```bash
    git clone https://github.com/Lawrence-afi/bakend-task-hng-renz.git
    cd bakend-task-hng-renz
    ```

2.  📦 **Install Dependencies**:
    ```bash
    npm install
    ```

3.  🚀 **Start the Server**:
    ```bash
    npm start
    ```
    The server will start on `http://localhost:3000`. You will see "Server is running on port 3000" in your console.

### Environment Variables
No environment variables are currently required for this project.

## API Documentation

### Base URL
`http://localhost:3000` (for local development)

### Endpoints

#### GET /me
Retrieves personalized user information along with a random cat fact.

**Request**:
This endpoint does not require any request body or query parameters.

**Response**:
```json
{
  "status": "success",
  "user": {
    "email": "lawrenceikara@gmail.com",
    "name": "Lawrence Ikara Okon ",
    "stack": "Node.js/Express"
  },
  "timestamp": "2023-10-27T12:00:00.000Z",
  "fact": "Cats can jump up to six times their height."
}
```

**Errors**:
- `500 Internal Server Error`: An error occurred while fetching the cat fact or processing the request.

## Usage

Once the server is running, you can access the `/me` endpoint using any HTTP client (e.g., your browser, Postman, curl).

To test the endpoint:

1.  Open your web browser and navigate to `http://localhost:3000/me`.
2.  Alternatively, use `curl` from your terminal:
    ```bash
    curl http://localhost:3000/me
    ```
    You should receive a JSON response containing the user details and a cat fact.

## Key Features

*   **Personalized Profile**: Serves static personal information quickly.
*   **External API Integration**: Seamlessly fetches dynamic content from the Cat Fact API.
*   **API Rate Limiting**: Protects the endpoint from excessive requests, ensuring fair usage and stability.
*   **CORS Enabled**: Configured to allow cross-origin requests, making it easy to integrate with frontend applications.

## Technologies Used

| Technology              | Description                                        | Link                                                               |
| :---------------------- | :------------------------------------------------- | :----------------------------------------------------------------- |
| **Node.js**             | JavaScript runtime for server-side execution.      | [nodejs.org](https://nodejs.org/)                                  |
| **Express.js**          | Fast, unopinionated, minimalist web framework.     | [expressjs.com](https://expressjs.com/)                            |
| **Axios**               | Promise-based HTTP client for the browser and Node.js. | [axios-http.com](https://axios-http.com/)                          |
| **CORS**                | Node.js middleware for enabling CORS.              | [github.com/expressjs/cors](https://github.com/expressjs/cors)     |
| **express-rate-limit**  | Basic rate-limiting middleware for Express.        | [www.npmjs.com/package/express-rate-limit](https://www.npmjs.com/package/express-rate-limit) |

## Contributing

We welcome contributions to enhance this project! If you have suggestions or want to improve the code, please follow these guidelines:

*   ✨ **Fork the repository**.
*   🌿 **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
*   💻 **Make your changes** and ensure the code adheres to existing style.
*   ✅ **Test your changes** thoroughly.
*   ⬆️ **Commit your changes** with clear, descriptive messages.
*   🚀 **Push your branch** to your forked repository.
*   🔄 **Open a Pull Request** to the `main` branch of this repository, describing your changes.

## License

This project is licensed under the ISC License. See the [LICENSE](https://opensource.org/licenses/ISC) file for details.

## Author

**Lawrence Ikara Okon**

Connect with me:

*   LinkedIn: [linkedin.com/in/your_username](https://linkedin.com/in/your_username)
*   Twitter: [@your_twitter_handle](https://twitter.com/your_twitter_handle)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)