const Employee = require('../lib/Employee');

describe('Employee',function (){
    test('can get name from getName', function () {
        let test = new Employee("noah",1,"GG")
        expect(test.getName()).toEqual("noah");
    });
    test('can get id from getId', function () {
        let test = new Employee("noah",1,"GG")
        expect(test.getId()).toEqual(1);
    });
    test('can get email from getEmail', function () {
        let test = new Employee("noah",1,"GG")
        expect(test.getEmail()).toEqual("GG");
    });
    test('can get role from getRole', function () {
        let test = new Employee("noah",1,"GG")
        expect(test.getRole()).toEqual('Employee');
    });
});

