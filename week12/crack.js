/* 
 Demonstration of password cracking using a brute-force attack.

 Given a captured password hash and matching salt value, we try to
 crack it by generating a password hash for each possible password.

 We assume that the password is 'password' + i, where i is a number. 

 We show the time taken to find the given password.
*/

const crypto = require("node:crypto");

// function to create a password hash using PBKDF2
const hashPassword = (password, salt) => {
    const key = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512");
    return key.toString("hex");
};

// an alternate version of the above using SHA256 which is much
// faster and so less secure
const sha256Hash = (password, salt) => {
    const hash = crypto.createHash("sha256");
    hash.update(password + salt);
    return hash.digest("hex");
};

const generatePassword = (i) => {
    return "password" + i;
};

const bruteForce = (iterations, hash, salt) => {
    for (let i = 0; i < iterations; i++) {
        const password = generatePassword(i);
        const hashedPassword = hashPassword(password, salt);
        if (hashedPassword === hash) {
            console.log("Password found: " + password);
            return password;
        }
    }
};

// Enter your captured hash and salt here
hash =
    "562d5ca6a630633063ee536047db1a4216ecbe13da61a726b8c8c9605f02837db1529a66f154070ee26ee0c65d43d6645641c280f75a8822c363dbf429831c07";
salt = "d4093de3aae7cd610dec109dcb848360";
iterations = 100;
console.time("bruteForce " + iterations);
bruteForce(iterations, hash, salt);
console.timeEnd("bruteForce " + iterations);
