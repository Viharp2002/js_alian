setInterval(timing,1000);

function timing(){
    let dt = new Date();
    console.log(dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());
}