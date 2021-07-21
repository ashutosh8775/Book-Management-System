const initialState = {
       BookData:''
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "Search":
            console.log(action.payload.data,'dd')
            return {
                ...state,
                BookData:action.payload
            }

        default: return state
    }
  }

  export default reducer