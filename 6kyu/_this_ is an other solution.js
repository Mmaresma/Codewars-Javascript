//JavaScript: 6 kyu - "this" is an other solution
//https://www.codewars.com/kata/54834b3559e638b39d0009a2

function OnceNamedOne(first, last) {
    var self = this;
    Object.defineProperties(self, {
        "firstName": {
            value: first,
            writable: false
        },
        "lastName": {
            value: last,
            writable: false
        },
        "fullName": {
            get: function() {
                return self.firstName + ' ' + self.lastName;
            },
            set: function() {},
            enumerable: true,
            configurable: false
        }
    });
}
