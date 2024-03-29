const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


const atLeastThreeLanguages = users.filter(user => user.languages.length >= 3);

console.log(atLeastThreeLanguages);

// 3.Use .map to create an array of strings where each element is a user's email address

const emails = users.map(user => user.email);

    console.log(emails);

// 4.Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalExp = users.reduce((yearsOfExperience, user) => {
   return yearsOfExperience + user.yearsOfExperience
}, 0);

console.log(totalExp);

let average = totalExp / users.length
console.log(average);

// 5.Use .reduce to get the longest email from the list of users.

const longEmail = users.reduce((email, user) => {
    if (email.length < user.email.length) {
        return user.email
    } else {
        return email

    }
}, []);

console.log(longEmail);

// 6.Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userList = users.reduce((name, user) => {
    if(user.name !== 'justin')
    {
        return name + user.name + ", "
    }
    else
    {
        return name + user.name + '.';
    }
    // return user.name !== 'justin' ? name + user.name + ", " : name + user.name + ".";
}, 'Your instructors are: ');
console.log(userList);

// BONUS Use .reduce to get the unique list of languages from the list of users.

const uniqLists = users.reduce((arr, user) => {

    return [...new Set([...arr, ...user.languages])]
}, [])
console.log(uniqLists);








