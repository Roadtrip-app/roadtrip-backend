require('dotenv').config();
const express = require('express');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true
})
.then(() => {app.listen(process.env.PORT)})
.catch((err) => {console.log(err)});