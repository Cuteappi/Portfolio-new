const initalTohome = {
    initialState: {
        opacity: 0,
        y:100,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    animateState: {
        opacity: 1,
        y: 0,
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
        y: -1000
    },
    animateState: {
        opacity: 1,
        y: 0, 
    },
    exitState: {
        opacity: 0,
        y: -1000
    }
}

export const animations = [
    initalTohome,
    Home
  ];