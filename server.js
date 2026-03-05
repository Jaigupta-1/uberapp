const app = require('./app');
const connectDB = require('./db/dbConnection')
const PORT = process.env.PORT ?? 3000;

connectDB();
app.listen(PORT, ()=>console.log(`Server is running at port ${PORT}`));