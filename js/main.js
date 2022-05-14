// ====================================

//         COunter countdown

// ===================================


document.addEventListener("DOMContentLoaded",()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id), 
        current = start,
        range = end - start,
        increment = end > start ? 1 :-1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer)
            }
        }, step)
    }
    counter("count1", 0, 1234, 3000);
    counter("count2", 0, 123, 5400);
    counter("count3", 1204, 1583, 3900);
    counter("count4", 0, 123, 7040);
})

console.log(counter("count4", 0, 123, 7040));
