var expect = require('chai').expect;

describe('异步的测试', function() {
  it('测试应该5000毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done(); // 通知Mocha测试结束，否则，Mocha就无法知道，测试是否结束，会一直等到超时报错
    };
    setTimeout(f, 4000);
  });
})