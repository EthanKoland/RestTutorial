# OverView
This was a quick project that followed a tutorial to set up a REST API using Node.js, Express, and MongoDB. The tutorial can be found [here](https://www.youtube.com/watch?v=fgTGADljAeg).

# Skills Learned
1. How to use routes in an express app to handle requests for subdirectories and pages
2. how to integrate MongoDB into an express app
3. How to use Mongoose to create models for MongoDB

# How to Run
1. Clone the repository
2. Run `npm install` to install all dependencies. You will need express, mongoose, nodemon, and dotenv.
3. Create a .env file in the root directory and add your MongoDB connection string. It should look like this: `DATABASE_URL = <your connection string>`. Mine was `DATABASE_URL = mongodb://localhost/subscribers`
4. Run `npm run devStart` to start the server. You should see a message in the console that says "Server started on port 3000" and that it was connected to the database.