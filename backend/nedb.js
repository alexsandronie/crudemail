var Datastore = require( 'nedb');
var db = new Datastore({filename: './crud/backend/banco.db', autoload: true});

db.loadDatabase(function(err){});

var user = {
    id: 0,
    name: "zero2",
    email: "zero@domain.com"
};

db.insert(user, function(err){
    if(err)return console.log(err);

    console.log("Novo email criado!");
});
db.find({name:'alex'},function(err, user) {
    if(err)return console.log(err);
    console.log(user)
});
