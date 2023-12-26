Shery.mouseFollower();

// Shery.mouseFollower({
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.3,
  });


Shery.textAnimate(".text-target" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 0.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
    // images: ["https://cdn.pixabay.com/photo/2017/03/13/12/34/coffee-2139592_1280.jpg", "https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_1280.jpg", "https://cdn.pixabay.com/photo/2014/12/11/02/57/coffee-563800_1280.jpg"] /*OR*/,
    videos: ["https://understanding963852.github.io/img/0.mp4", "https://understanding963852.github.io/img/2.mp4", "https://understanding963852.github.io/img/3.mp4"],
});