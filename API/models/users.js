const {connector} = require('./databaseUtility');

const userSchema = {
  name: String,
  id: String,
  password: String
}

const User = new connector.model('User', userSchema);
 

async function createUser(name, id, password){
  const newUser = new User({name: name, id:id, password:password});
  let res = {};
  await newUser.save().then((result) => {
    res.id = id;
  }).catch((err) => {
    res.err = err;
  });
  return res;
}

function validateUser(id, pass){
  if(id==165)
    return true;
  return false; 
}


module.exports = {validateUser:validateUser, createUser:createUser}; 