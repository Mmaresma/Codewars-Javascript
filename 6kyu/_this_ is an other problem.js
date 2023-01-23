//JavaScript: 6 kyu - "this" is an other problem
//https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
    this._firstName = first;
    this._lastName = last;
    this._fullName = this._firstName + ' ' + this._lastName;

    Object.defineProperty(this, 'firstName', {
        get: function() {
            return this._firstName;
        },
        set: function(name) {
            this._firstName = name;
            this._fullName = this._firstName + ' ' + this._lastName;
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function() {
            return this._lastName;
        },
        set: function(name) {
            this._lastName = name;
            this._fullName = this._firstName + ' ' + this._lastName;
        }
    });

    Object.defineProperty(this, 'fullName', {
        get: function() {
            return this._fullName;
        },
        set: function(name) {
            if (name.split(' ').length === 2) {
                this._fullName = name;
                let nameParts = name.split(' ');
                this._firstName = nameParts[0];
                this._lastName = nameParts[1];
            }
        }
    });
}
