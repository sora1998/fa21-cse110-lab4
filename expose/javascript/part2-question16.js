let statistics={
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (const name in statistics){
    if (name[0]==='r'){
        console.log(`${name}:${statistics[name]}`);
    }
    else if(statistics[name]%2===1){
        console.log(`${name}:${statistics[name]}`);
    }
}