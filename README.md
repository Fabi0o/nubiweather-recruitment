# NubiWeather Recruitment Task

Live Preview: [https://nubiweather-recruitment-jbj9.vercel.app/](https://nubiweather-recruitment-jbj9.vercel.app/)

## Project Overview

NubiWeather is a full-stack weather application built as part of a recruitment task. The application fetches real-time weather data and weather forecasts for two cities, Gliwice and Hamburg, using the WeatherAPI service. It provides users with up-to-date weather information such as current conditions and forecasts for the next few days.

The project is structured using the **Next.js App Router** and implements both frontend and backend logic. The backend interacts with external APIs, while the frontend dynamically fetches and displays the data.

### Features Implemented

- **Real-time Weather Data**: Displays current weather conditions for two cities (Gliwice and Hamburg).
- **Forecast Weather Data**: Provides a 3-day weather forecast for the same cities.
- **Dynamic Page Rendering**: The homepage fetches fresh weather data on every request by preventing static rendering, ensuring that the latest information is always displayed.
- **Weather Data Mapping**: Custom mappers are used to transform API responses into a standardized format that the frontend components consume.

## Frontend and Backend Communication

The application’s frontend and backend communicate via **API endpoints** created using Next.js API routes in the `app` directory. These routes fetch weather data from the WeatherAPI and serve the processed responses to the frontend.

- **Backend**: 
  - Two API endpoints (`/realtime-weather` and `/forecast-weather/:days`) handle the retrieval of real-time and forecast weather data, respectively.
  - The API endpoints fetch the data from WeatherAPI, map the responses into a format suitable for the frontend, and send the data back as JSON.

- **Frontend**: 
  - The frontend fetches data from the backend's API routes using `fetch` and displays it via reusable `WeatherCard` components.
  - Real-time weather and forecast weather data are displayed side-by-side for both cities.

## Project Structure

The full-stack solution is stored in the `full-stack-solution` directory within this repository.

## How to Run Locally

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Fabi0o/nubiweather-recruitment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd full-stack-solution
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the environment variables:
   * Create a .env file in the root of the full-stack-solution directory with the following keys:
   ```
   API_KEY=<your-weather-api-key>
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
   * API_KEY: Your API key from WeatherAPI.
   * NEXT_PUBLIC_BASE_URL: The base URL for the project when running locally.
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open http://localhost:3000 in your browser to view the app.

## Tech Stack

* Frontend: React, Next.js (App Router)
* Backend: Next.js API Routes
* Styling: TailwindCSS
* External API: WeatherAPI for fetching real-time and forecast weather data

## Conclusion

This project demonstrates a basic full-stack weather application where the frontend communicates seamlessly with the backend through API routes, and dynamic data fetching ensures real-time weather updates. Feel free to clone the repository and run it locally following the steps above!

### Key Sections:

1. **Live Preview**: Added the link to the live preview at the top.
2. **Project Overview**: A summary of the app's purpose and functionality.
3. **Features Implemented**: Description of the key features.
4. **Frontend and Backend Communication**: Explains how the frontend and backend interact.
5. **How to Run Locally**: Detailed steps to run the app locally, including setting up environment variables.
6. **Tech Stack**: Describes the tools and technologies used in the project.



   
