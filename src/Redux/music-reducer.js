const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    playlist: [
        {avtor: "Luba", trek: "Hours"},
        {avtor: "Bob Dylan", trek: "Knock knock"},
        {avtor: "Red cheil the papers", trek: "Californication"},
    ],
}

const musicReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMusic = {
                    avtor: "Luba",
                    trek: "Hours"
                }
                }
        default: return  state

    }

}

export default musicReducer;