// animation start ending time control --------------------------
const cusDuration = 1.3;
const cusDelay = 0;
// const startPos = "top bottom";
const startPos = "top 80%";
const cusMark = false;

// user one of those four class to animation your image
// bottom-anm, top-anm, right-anm, left-anm

// functionality --------------------------------------------
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const slomoEase = CustomEase.create(
    "slowToFast",
    "M0,0 C0.478,0.316 0.488,0.314 0.646,0.462 0.838,0.642 0.912,0.778 1,1 "
);

const leftAnm = gsap.utils.toArray(".left-anm .img-mask");
if (leftAnm.length) {
    leftAnm.map((item, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: startPos,
                markers: cusMark,
            },
        })
            .set(item, {
                left: 0,
                top: 0,
            })
            .fromTo(
                item,
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
    });
}

// right animation
const rightAnm = gsap.utils.toArray(".right-anm .img-mask");
if (rightAnm.length) {
    rightAnm.map((item, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: startPos,
                markers: cusMark,
            },
        })
            .set(item, {
                right: 0,
                top: 0,
            })
            .fromTo(
                item,
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
    });
}

// top animation
const topAnm = gsap.utils.toArray(".top-anm .img-mask");
if (topAnm.length) {
    topAnm.map((item, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: startPos,
                markers: cusMark,
            },
        })
            .set(item, {
                right: 0,
                top: 0,
            })
            .fromTo(
                item,
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
    });
}

// bottom animation

const bottomAnm = gsap.utils.toArray(".bottom-anm .img-mask");
if (bottomAnm.length) {
    bottomAnm.map((item, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: startPos,
                markers: cusMark,
            },
        })
            .set(item, {
                right: 0,
                bottom: 0,
            })
            .fromTo(
                item,
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
    });
}
