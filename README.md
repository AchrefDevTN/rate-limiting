# Rate Limiting

![Rate Limiting](https://miro.medium.com/v2/resize:fit:800/0*yNQXf4t_ylDop7WY.jpg)

## Overview

This repository provides a comprehensive implementation of rate limiting using Node.js and Express. The project showcases best practices in applying global and route-specific rate limits to prevent abuse and ensure fair usage.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Rate Limiting Details](#rate-limiting-details)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Features

- **Global Rate Limiting**: Limits the number of requests per IP address to prevent abuse.
- **Login Rate Limiting**: Specifically limits login attempts to mitigate brute force attacks.
- **Security Enhancements**: Utilizes Helmet for basic security improvements.

## Tech Stack

- **Backend**: Node.js, Express
- **Rate Limiting**: express-rate-limit
- **Security**: Helmet
- **Environment Management**: dotenv

## Prerequisites

Ensure you have the following installed and configured on your machine:

- **Node.js**: Version 14 or higher. [Download here](https://nodejs.org/).
- **MySQL**: MySQL server or a compatible database for future expansions. [Download here](https://dev.mysql.com/downloads/mysql/).

For installation assistance, refer to the official documentation or guides.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AchrefDevTN/rate-limiting.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd rate-limiting
   ```
  
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a .env file in the root directory:**
   (Copy the contents below and configure your environment variables)
  
   ```ini
   PORT=5000
   ```

5. **Run the application:**
   - For development
   ```bash
   npm run dev
   ```
   - For production
   ```bash
   npm start
   ```

6. **Access the API:**
   - The server will be running on
   ```bash
   http://localhost:5000
   ```

## API Endpoints

- **GET `/api/`**  
  Returns a welcome message.  
  **Response:**  
  ```json
  {
     "message": "Welcome to the Rate Limiting API!"
  }
  ```
  
- **POST `/api/login`**  
  Logs in a user and applies rate limiting.  
  **Request body:**  
  ```json

  {
    "username": "string",
    "password": "string"
  }
  ```

  **Response:**  
  ```json

  {
    "message": "Login successful"
  }
  ```


## Global Rate Limiter
- **Limits**: 100 requests per 15 minutes per IP
- **Message**: Too many requests from this IP, please try again later.

## Login Rate Limiter
- **Limits**: 5 login attempts per 15 minutes per IP
- **Message**: Too many login attempts from this IP, please try again later.

## Contributing
If you have suggestions or improvements, please submit an issue or pull request. Contributions are welcome!

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/AchrefDevTN/rate-limiting/blob/main/LICENSE) file for details.

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)]([https://www.linkedin.com/](https://www.linkedin.com/in/achref-ben-brahim-dev/))


| Node.js | Express | Rate Limiting | License |
|---------|---------|---------------|---------|
| [![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green)](https://nodejs.org/) | [![Express](https://img.shields.io/badge/Express-v4.18.2-blue)](https://expressjs.com/) | [![Rate Limiting](https://img.shields.io/badge/Rate%20Limiting-%E2%9C%94-brightgreen)](https://www.npmjs.com/package/express-rate-limit) | [![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/your-username/rate-limiting/blob/main/LICENSE) |



