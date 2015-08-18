//where our iterators live
var o_o = {
  each: function(list, callback) {
      var output = [];
      for(i = 0; i < list.length; i++){
        output.push(callback(list[i]));
      }
      list = output;
  },
  map: function(list, callback){
    var output = [];  
    for(i = 0; i < list.length; i++){
        output.push(callback(list[i]));
    }
      return output;
  },
  filter: function(list, callback) {
      var output = [];
      for(i = 0; i < list.length; i++){
        if(callback(list[i])){
            output.push(list[i]);
        }
      }
      return output;
  }
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;