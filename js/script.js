// animation start ending time control --------------------------
const cusDuration = 1.3;
const cusDelay = 0;
// const startPos = "top bottom";
const startPos = "top 30%";
const cusMark = true;

// user one of those four class to animation your image
// bottom-anm, top-anm, right-anm, left-anm

// functionality --------------------------------------------
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const slomoEase = CustomEase.create(
    "slowToFast",
    "M0,0 C0.478,0.316 0.488,0.314 0.646,0.462 0.838,0.642 0.912,0.778 1,1 "
);

gsap.timeline({
    scrollTrigger: {
        trigger: ".left-anm",
        start: startPos,
        markers: cusMark,
    },
})
    .set(".left-anm", {
        left: 0,
        top: 0,
    })
    .fromTo(
        ".left-anm .img-mask",
        {
            width: "100%",
        },
        {
            width: "0%",
            duration: cusDuration,
            delay: cusDelay,
            ease: slomoEase,
        }
    );

// right animation
gsap.timeline({
    scrollTrigger: {
        trigger: ".right-anm",
        start: startPos,
        markers: cusMark,
    },
})
    .set(".right-anm .img-mask", {
        right: 0,
        top: 0,
    })
    .fromTo(
        ".right-anm .img-mask",
        {
            width: "100%",
        },
        {
            width: "0%",
            duration: cusDuration,
            delay: cusDelay,
            ease: CustomEase.create(
                "slowToFast",
                "M0,0 C0.45,0.328 0.448,0.34 0.606,0.488 0.798,0.668 0.942,0.824 1,1 "
            ),
        }
    );

// top animation

gsap.timeline({
    scrollTrigger: {
        trigger: ".top-anm",
        start: startPos,
        markers: cusMark,
    },
})
    .set(".top-anm .img-mask", {
        right: 0,
        top: 0,
    })
    .fromTo(
        ".top-anm .img-mask",
        {
            height: "100%",
        },
        {
            height: "0%",
            duration: cusDuration,
            delay: cusDelay,
            ease: slomoEase,
        }
    );

// bottom animation

const bottomAnm = gsap.utils.toArray('.bottom-anm');

gsap.timeline({
    scrollTrigger: {
        trigger: ".bottom-anm",
        start: startPos,
        markers: cusMark,
    },
})
    .set(".bottom-anm .img-mask", {
        right: 0,
        bottom: 0,
    })
    .fromTo(
        ".bottom-anm .img-mask",
        {
            height: "100%",
        },
        {
            height: "0%",
            duration: cusDuration,
            delay: cusDelay,
            ease: slomoEase,
        }
    );
