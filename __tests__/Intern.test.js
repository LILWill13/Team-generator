const Intern = require('../lib/Intern.js');

describe('Engineer',function (){
    test('can get school from getschool', function () {
        let test = new Intern("noah",1,"GG@gg","Wellington prep")
        expect(test.getSchool()).toEqual('Wellington prep');
    });
    test('can get role from getRole', function () {
        let test = new Intern("noah",1,"GG@gg","Wellington prep")
        expect(test.getRole()).toEqual('Intern');
    });
});