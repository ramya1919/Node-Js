function counter(seconds){
    let timeLeft=seconds;
    const timer=setInterval(() => {
        if(timeLeft>0){
            console.log(`Time left: ${timeLeft} seconds`)
            timeLeft--;
        }else{
            console.log('time is up');
            clearInterval(timer)
        }
    }, 1000);
}
counter(4);