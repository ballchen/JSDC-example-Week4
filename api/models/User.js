module.exports = {

  attributes: {
  	name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    posts:{
      collection:"Post",
      via: "owner"
    },
    toDisplay: function(){
      return "user name is "+this.name;
    }
  },

  beforeCreate: function(values,next){
    console.log("create params:");
    console.log(values);
    next();
  }

};
