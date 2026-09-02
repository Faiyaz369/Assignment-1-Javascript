//Question-2

function getDayType(day){

    let day_up = day.toUpperCase();

    switch(day_up){
        case "SUNDAY":
        case "MONDAY":
        case "TUESDAY":
        case "WEDNESDAY":
        case "THURSDAY":
            return "Working Day";
            break;

        case "FRIDAY":    
        case "SATURDAY":
            return "Weekend";
            break; 
            
        default:
            return "Invalid Day";
            break;    


    }

}
