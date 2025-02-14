# Movie App

A movie discovery app built using React, TMDB API, and Appwrite. Search for your favorite movies, get detailed information, and track search metrics. (working on a separate backend, will publish that soon)

## Features

- Search for movies using TMDB API
- View detailed movie information (currently workin on it)
- Store search metrics in Appwrite database
- Fully open-source and open for contributions

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- An Appwrite account ([Sign up here](https://appwrite.io/))
- TMDB API Key ([Get it here](https://www.themoviedb.org/))

### Setup Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/movie-app.git
   cd movie-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Setup Appwrite**
   - Create a new project in [Appwrite](https://appwrite.io/)
   - Get your **Project ID**
   - Create a new **Database** for storing search metrics
   - Inside the database, create a **Collection** with necessary fields (e.g., `query`, `timestamp`, `results`)
   - Generate **API Keys** with required permissions

4. **Create an `.env` file** in the root directory and add the following:
   ```sh
   VITE_TMDB_API_KEY=tmdb_api_key
   VITE_APPWRITE_ID=appwrite_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_DATABASE_METRICS=your_collection_id
   ```

5. **Run the app**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Contributing

We love open-source contributions! If you want to improve this project, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

### Ideas for Contribution
- Create a separate backend for it instead of using appwrite
- Improve UI/UX
- Add more movie filtering options
- Implement user authentication
- Optimize API calls

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or suggestions, feel free to open an issue or reach out!

