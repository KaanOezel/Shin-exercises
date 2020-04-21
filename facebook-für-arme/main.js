let database = [
    {
        username: "Kaan",
        password: "zzz"
    },
    {
        username: "Delberin",
        password: "Dude"
    }
];

let newsfeed = [
    {
        author: "Delberin",
        title: "Hey Duuuuude!",
        summary: "Don't mind me! Just passing through"
    },
    {
        author: "Aiman",
        title: "Aiman's Work Blog",
        summary: "Hi people! Stop fooling around!"
    },
    {
        author: "Kaan",
        title: "What's going on dude!?",
        summary: "Why the fuck I am in my own feed!??!?!?!?"
    }];

    // check if user login is correct and show news feed

 let username= prompt("Please enter your username");
 let password= prompt("Please enter your password");

 signIn(username,password);

 function isUserValid(user,pass){
    for(let i=0; i < database.length; i++){
        if(user === database[i].username && pass === database[i].password){
            alert("You successfully logged in!");
            alert("Welcome " + database[i].username);
            return true;
        }
    }
    return false;    
 }

 function signIn(user,pass){
    if(isUserValid(user,pass)){
        console.log("user logged in succesfully");
        for(let i=0;i<newsfeed.length;i++){
            for(prop in newsfeed[i]){
                document.write(newsfeed[i][prop] + "<br>");
            } 
        }
    }
    else{
         alert("Your details login are not correct");
         alert("Please get lost DUDE!")
     }
 }
 
 
