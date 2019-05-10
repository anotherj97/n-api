function User(_name){
    this.name = _name;
}

User.prototype.greeting = function(){
    console.log('Hello!');
    return this;
}

User.prototype.introduce = function(){
    console.log('I am ${this.name}');
    return this;
}


var chris = new User('chris');
chris.greeting().introduce();
