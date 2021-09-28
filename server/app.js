const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

//password@420
//

mongoose
    .connect(
        'mongodb+srv://Leigh:test123@cluster0.cqb2q.mongodb.net',
        { dbName: 'test', useNewUrlParser: true, useUnifiedTopology: true  })
        .then(()=> {
            console.log("connected to database");
        });



app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening for requests on port 4000');
});