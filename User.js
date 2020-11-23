const validator = require("validator")

let User = function(data){
    this.data = data
    this.errors = []    
}

User.prototype.CleanUp = function(){
    if(typeof(this.data.username) !="string"){this.data.username = ""}
    if(typeof(this.data.email) !="string"){this.data.email = ""}
    if(typeof(this.data.password) !="string"){this.data.password = ""}

    // get rid of any bogus properties
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
}

User.prototype.validate = function(){
    if(this.data.username == ""){this.errors.push("You must provide a username")}
    if(this.data.username !=""&& validator.isAlphanumeric(this.data.username)){this.errors.push("username can only contain letters and numbers.")}
    if(!validator.isEmail(this.data.email) == ""){this.errors.push("You must provide a email")}
    if(this.data.password == ""){this.errors.push("You must provide a passwird")}
    if(this.data.password > 0 && this.data.password.length < 12){this.errors.push("password must be at least 12 characters")}
    if(this.data.password.length > 420){this.errors.push("Password cannot exceed 420 characters")}
    if(this.data.username > 0 && this.data.username.length < 4){this.errors.push("Username must be at least 4 characters")}
    if(this.data.username.length > 69){this.errors.push("Username cannot exceed 69 characters")}

}

User.prototype.register = function() {
    // Step #1: Validate user data
    this.CleanUp()
    this.validate()

    // Step #2: Only if there are no validation errors
    // then save the user data into a database

}

module.exports = User