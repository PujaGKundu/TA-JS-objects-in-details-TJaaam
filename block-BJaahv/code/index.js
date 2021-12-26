/*
Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects
*/



//- [ ] Using function to create object

/*
function user (name, id, noOfProjects) {
    let obj = {};
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;
    obj.getProjects = function() {
        return noOfProjects;
    };
    obj.changeName = function(newName) {
        this.newName = newName;
        return this.name;
    };
    obj.incrementProject = function(value = 1) {
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    };
    obj.decrementProject = function(value = 1) {
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    };
    return obj;
}
*/





//- [ ] Using Object.create (prototypal pattern)


/*
let methods = {    
    getProjects () {
        return noOfProjects;
    },
    changeName(newName) {
        this.newName = newName;
        return this.name;
    },
    incrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    },
}

function user (name, id, noOfProjects) {
    let obj = Object.create(methods);
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;
    return obj;
}

*/

//- [ ] Using Pseudoclassical Way


/*
function User (name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

User.prototype  = {    
    getProjects () {
        return noOfProjects;
    },
    changeName(newName) {
        this.newName = newName;
        return this.name;
    },
    incrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    },
}
*/




//- [ ] Using Class


class User {
    constructor (name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects () {
        return noOfProjects;
    }
    changeName(newName) {
        this.newName = newName;
        return this.name;
    }
    incrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    }
    decrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    }
}






//Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
let user1 = new User("Arya", 35, 67);
let user2 = new User("John", 2, 34);