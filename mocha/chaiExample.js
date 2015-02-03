var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
 

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(done){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(1, [1,2,3].indexOf(2));
      done()
    })
  })
})

describe('Array', function(){
  describe('#length()', function(){
    it('should return 3 when the length of string is 3', function(done){
		assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
      done()
    })
  })
})