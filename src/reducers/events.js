const initialState = { all: [] }

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      return {
        ...state,
        all: action.payload
      }
    }
    default: {
      return state
    }
  }
}