//Question-3

function validateUsername(value){
    let username = value.toLowerCase();
    if(username.length < 4){
        return "Too Short";
    }else if(username.includes(" ") > 0){
        return "No Space Allowed";
    }else if(username.includes("admin") > 0){
        return "Reserved Word";
    }else{
        return "Available";
    }
}
