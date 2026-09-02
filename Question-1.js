//Question-1

function describeValue(value){
    let val_type = typeof(value);//taking the type of value
    let tr_val;
    (value)? tr_val = "Truthy" : tr_val = "Falsy";
    return val_type + " | " + tr_val; 
}
