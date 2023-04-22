const mongoose = require("mongoose");

async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
    }
    catch(err){
        console.log(err.message);
    }
};
