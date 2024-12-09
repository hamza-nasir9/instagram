let likeshow = document.querySelectorAll(".showlake");
let like = document.querySelectorAll("#like")
let likecount = document.querySelector("#countlike")

a = 14234;

likecount.innerHTML = a;

function sohwe() {
    likeshow.forEach(hide => {
        hide.addEventListener("click", function (e) {
            like.forEach(like => {
                like.style.transform = "scale(1)";
            })
            hide.style.transform = "scale(0)"
            hide.style.transition = "all 0.2s"

            if (hide.style.transform == "scale(0)") {
                let number = likecount.innerHTML = a;
                let final = number;
                likecount.innerHTML = final;
            }
        })

    })
}
sohwe();

function hello() {
    like.forEach(show => {
        show.addEventListener("click", () => {
            likeshow.forEach(likeshow => {
                likeshow.style.transform = "scale(1.1)";
            })
            show.style.transform = "scale(0)";
            if (show.style.transform == "scale(0)") {
                let number = likecount.innerHTML = a;
                let mun = number + 1;
                likecount.innerHTML = mun;
            }
        })

    })

}
hello()

// console.log('hahhah');

const img = () => {
    let postimg = document.querySelector("#postimage");

    let imgpost = document.querySelector(".imagelike")

    postimg.addEventListener("dblclick", function () {

        imgpost.style.transform = "translate(-50%, -50%) scale(1)";
        imgpost.style.color = "rgb(255, 0, 21)";

        setTimeout(function () {
            imgpost.style.top = "-10%"
            imgpost.style.transition = "all 0.9s"

        }, 500)

    })
}

img();





arr = [
    {
        dp: "https://images.unsplash.com/photo-1561653476-e4d0d852f86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1561632792-08d4c7a4ab59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveSUyMGJhY2t8ZW58MHx8MHx8fDA%3D",
        name: "hamza"
    },
    {
        dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMG1vZGVsfGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        name: "hira"
    },
    {
        dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        name: "fiza"
    },
    {
        dp: "https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveSUyMG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1514799595136-965d9d614956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZCUyMGxvb2tpbmclMjBib3l8ZW58MHx8MHx8fDA%3D",
        name: "shahood"
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QjR3FX6yqaJobXvpOBZdB9J4qz0nrhNPv8d-XcbPjQ&s",
        story: "https://img-mm.manoramaonline.com/content/dam/mm/mo/web-stories/movies/images/2023/2/14/durefishan-saleem-2.jpg",
        name: "Durefisha"
    },
    {
        dp: "https://images.unsplash.com/photo-1502258097612-43e695deebad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveSUyMG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvb2QlMjBsb29raW5nJTIwYm95fGVufDB8fDB8fHww",
        name: "Mushi"
    },
    {
        dp: "https://images.unsplash.com/photo-1486621312635-4f73b739befc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveSUyMG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1486621312635-4f73b739befc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveSUyMG1vZGVsfGVufDB8fDB8fHww",
        name: "suni"
    },
    {
        dp: "https://images.unsplash.com/photo-1541519481457-763224276691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1523944339743-0fe06f079939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2QlMjBsb29raW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        name: "urooj"
    },
    {
        dp: "https://images.unsplash.com/photo-1599557852664-0f988f3b49ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvb2QlMjBsb29raW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        name: "phatani"
    }
]
let storyian = document.querySelector(".story");
let fullscreen = document.querySelector(".fullScreen");
let culter = "";

arr.forEach((val, idx) => {
    culter += `
    <div class="mainstory">
    <div class="storie">
        <img id="${idx}" src="${val.dp}"
            alt="">
    </div>
    <span>${val.name}</span>
    </div>
`;
    storyian.innerHTML = culter;




    storyian.addEventListener("click", (elem) => {
        fullscreen.classList.add("fullactive")
        storyshow = ` 
        <div class="showpicture">
        <div class="post-dets profilestory">
                        <img src="${arr[elem.target.id].dp}"
                            alt="post">
                        <div class="post-dets-text">
                            <h5>${arr[elem.target.id].name}</h5>
                            <h6>Chris Brown•Under The Influence</h6>
                        </div>
                    </div>
        <i class="fa-solid fa-xmark"></i>
        <img src="${arr[elem.target.id].story}" alt="">
        </div>
    `
        fullscreen.innerHTML = storyshow;

        setTimeout(function () {
            fullscreen.classList.remove("fullactive")
        }, 3000)

        let xmark = document.querySelector(".fa-xmark");
        xmark.addEventListener("click", () => {
            fullscreen.classList.remove("fullactive")
        })

    })


});

follow = [
    {
        image: "https://images.unsplash.com/photo-1528536931080-37b266b55100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21va2luZyUyMCUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
        name: "shayan",
        suggest: "itzshayan"
    },
    {
        image: "https://images.unsplash.com/photo-1623000935511-cfd84760ff65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bmdsYXNzZXMlMjBnaXJsfGVufDB8fDB8fHww",
        name: "itzrubab ",
        suggest: "Rubab sheikh🤞"
    },
    {
        image: "https://images.unsplash.com/photo-1597497287565-a38cfaa4e762?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F3YXNha2klMjBuaW5qYXxlbnwwfHwwfHx8MA%3D%3D",
        name: "yasirkhan ",
        suggest: "yasir khan💖"
    },
    {
        image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95JTIwaW4lMjBneW18ZW58MHx8MHx8fDA%3D",
        name: "Ahmedraza ",
        suggest: "Ahmed Raza"
    },
    {
        image: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJveSUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww",
        name: "hamza",
        suggest: "New to instagram"
    },
    {
        image: "https://images.unsplash.com/flagged/photo-1570700005880-4ecdb8595d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMGJpa2luaXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Bellielish",
        suggest: "suggested for you"
    },

]
let right = document.querySelector(".right")
number = ""
follow.forEach((item, idx) => {
    number += ` <div class="profile">
    <div class="profile-img">
        <img id="${idx}" src="${item.image}"
            alt="">
    </div>
    <div class="profile-text">
        <h5>${item.name}<span>
                <h6>${item.suggest}</h6>
            </span></h5>

            <div id="btnfollow" class="button"><button>Follow</button></div>
    </div>
</div>

`

    right.innerHTML = number



    let button = document.querySelectorAll(".button");
    let mainpop = document.querySelector(".main-pop")

    button.forEach((item, idx) => {

        item.addEventListener("click", (e) => {

            e.target.innerHTML = "following"
            e.target.style.color = "gray"


            item.addEventListener("click", () => {
                mainpop.classList.add("popadd")
                showoff = `<div class="popup-content">
                <div class="pop-img">
                    <img src="${follow[e.target, idx].image}" alt="">
                </div>
                <div class="pop-text">
                    <h5>unfollow @${follow[e.target, idx].name}</h5>
                    <button class="unfollow">unfollow</button>
                    <button class="cancle">cancle</button>
                </div>
            </div>`


                mainpop.innerHTML = showoff
                console.log(follow[e.target, idx].name)
                console.log(showoff)


                let unfollow = document.querySelector(".unfollow");
                unfollow.addEventListener("click", () => {
                    mainpop.classList.remove("popadd");
                    e.target.innerHTML = "Follow";
                    e.target.style.color =  "#119cf7";
                    e.target.style.fontSize = "13px"
                })
                let cancle = document.querySelector(".cancle");
                cancle.addEventListener("click", () => {
                    mainpop.classList.remove("popadd");
                })


            })





        })



    })



    // function showfollow() {

    //     let button = document.querySelectorAll(".button");
    //     let unfollow = document.querySelector(".unfollow");

    //     button.forEach(btn => {
    //         btn.addEventListener("click", (e) => {

    //             e.target.innerHTML = "following"
    //             e.target.style.color = "gray"

    //             e.target.addEventListener("click", function () {
    //                 let pop = document.querySelector(".main-pop").style.display = "block";
    //             })

    //             if (e.target.innerHTML == "following") {

    //                 unfollow.addEventListener("click", (e) => {
    //                     btn.innerHTML = "Follow";
    //                     btn.style.color = "#119cf7"
    //                     btn.style.fontSize = "13px"
    //                     let pop = document.querySelector(".main-pop").style.display = "none";
    //                     console.log("hello")
    //                 })
    //             }
    //         })
    //     })



    //     let pop = document.querySelector(".main-pop")
    //     let cancle = document.querySelector(".cancle");
    //     cancle.addEventListener("click", () => {
    //         pop.style.display = "none"
    //     })
    // }

    // showfollow();

})

