const initalTohome = {
    initialState: {
        opacity: 0,
        x: -1000,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    animateState: {
        opacity: 1,
        x: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    exitState: {
        opacity: 0,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    }
}

const Home = {
    initialState: {
        opacity: 0,        
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    animateState: {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    exitState: {
        opacity: 0,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        scale:0
    }
}

export const animations = [
    initalTohome,
    Home
  ];