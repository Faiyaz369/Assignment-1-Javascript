//Question-4

function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let main_distance = distance - 2;
    let fare = 50;
    if(main_distance > 0){
        let road_cost = 15*main_distance;
        fare = fare + road_cost;
    }

    if(waitingMinutes > 0){
        let waiting_cost = waitingMinutes*2;
        fare = fare + waiting_cost;
    }

    if(isNight){
        let NightCost = (fare*20)/100;
        fare = fare + NightCost;
        return fare;
    }else{
        return fare;
    }

}
