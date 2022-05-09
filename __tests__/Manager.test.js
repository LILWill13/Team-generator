const Manager = require('../lib/manager.js');


describe('Engineer',function (){
    test('can get role from getRole', function () {
        let test = new Manager("noah",1,"GG@gg",112)
        expect(test.getRole()).toEqual('Manager');
    });
});