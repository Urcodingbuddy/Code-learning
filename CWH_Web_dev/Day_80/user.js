class User {
    constructor(username, email, dateOfBirth) {
        this.username = username;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }

    // Method to display user information
    displayUserInfo() {
        console.log(`Username: ${this.username}`);
        console.log(`Email: ${this.email}`);
        console.log(`Date of Birth: ${this.dateOfBirth}`);
    }
}

// Creating a new user instance
let newUser = new User('john_doe', 'john@example.com', '1990-05-15');

// Displaying user information
newUser.displayUserInfo();
