const {connector} = require('./databaseUtility');

const userSchema = {
  name: 'string',
  id: 'string',
  password: 'string'
}

const User = new connector.model('User', userSchema);
 

async function createUser(name, id, password){
  const newUser = new User({
    name: name, 
    id:id, 
    password:password
  });
  let res = {};
  await newUser.save((err)=>console.log("Error: ", err)).then((result) => {
    res.id = id;
  }).catch((err) => {
    res.err = err;
  });
  return res;
}

async function validateUser(id, pass){
  let user = await User.findOne({id: id}).catch(err=>console.log(err))
  if(user){
    if(user.password==pass)
      return true
    return false;
  }
  return false;
}


module.exports = {validateUser:validateUser, createUser:createUser}; 