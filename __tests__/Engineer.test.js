const Engineer = require('../lib/Engineer')

describe('Engineer',function (){
    test('can get github from getGithub', function () {
        let test = new Engineer("noah",1,"GG@gg","jimmy11")
        expect(test.getGithub()).toEqual('jimmy11');
    });
    test('can get role from getRole', function () {
        let test = new Engineer("noah",1,"GG@gg","jimmy11")
        expect(test.getRole()).toEqual('Engineer');
    });
});
