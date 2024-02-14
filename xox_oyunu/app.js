 const board =document.querySelector(".table")
 const infoLable=document.querySelector("h1")
 let flip=false;
 let count=0;

let startgame=()=>
{
    board.innerHTML="";
    infoLable.textContent="";
    count=0;
    board.style.pointerEvents="all";
    for(let i=1;i<=9;i++)
    {
        let 
        square=document.createElement("div");
        square.classList.add("square");
        board.appendChild(square);

    }
    const allsquares=
    document.querySelectorAll(".square");
    allsquares.forEach(item=>{item.addEventListener("click",(e)=>
    {
        if(!flip)
        {
            let sign=document.createElement("div")
            sign.classList.add("cross")

            e.target.style.pointerEvents="none";

            e.target.appendChild(sign);
            check()
            flip=!flip;
        }
        else
        {
            let sign=
            document.createElement("div")
            sign.classList.add("circle")
            e.target.style.pointerevents="none"

            e.target.appendChild(sign);
            check()
            flip=!flip;
        }
    })})
};

const check=()=>
{
    const allsquares=document.querySelectorAll(".square")
    let winningcombinations=
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    count++
    winningcombinations.forEach((pair) => 
    {
        let crosswin = pair.every((item)=>
        allsquares[item].firstChild?.classList.contains("cross"));

        let circlewin=pair.every((item) => 
        allsquares[item].firstChild?.classList.contains("circle")
        );
        if(crosswin)
        {
            infoLable.textContent="X KAZANDI!"

            board.style.pointerEvents="none"
            setTimeout(()=> 
            {
                startgame()
            },3000);
        }
        else if(circlewin)
        {
            infoLable.textContent="O KAZANDI!"

            board.style.pointerEvents="none"
            setTimeout(()=> 
            {
                startgame()
            },3000);
        }

        if(count===9)
        {
            infoLable.textContent="BERABERE!"

            board.style.pointerEvents="none"
            setTimeout(()=> 
            {
                startgame()
            },3000);
        }
    })
}
startgame();
