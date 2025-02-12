const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

yes.addEventListener("click", () => {
    document.querySelector(".gif img").src = "https://media.giphy.com/media/9vL5wayQBQ3X0Tklcn/giphy.gif?cid=ecf05e476k0kf1rvg9tfxc3vntav11mopahhjwn3oa1dcgzc&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    document.querySelector(".question").innerHTML = "I love you too!";
    const gif= document.querySelector(".gif");
    gsap.to(gif, {
        scale: 5,
        duration: 0.5,
    })
    gsap.to(yes, {
        visibility: "hidden",
    })
    gsap.to(no, {
        visibility: "hidden",
    })
});
no.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect(); // get the wrapper's position and dimensions
    const noBtnRect = no.getBoundingClientRect(); // get the "NO" button's dimensions

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width - 200;
    const maxY = wrapperRect.height - noBtnRect.height - 200;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    no.style.left = randomX + "px"; // move the button horizontally
    no.style.top = randomY + "px";  // move the button vertically
});
