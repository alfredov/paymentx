
export const combineReducersByIndex = (
  index: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  reducer: {},
) => { 
  // eslint-disable-next-line @typescript-eslint/ban-types
  const registerReducer = (reducers: {}) => ({
    ...reducers,
    [index]: reducer,
  })
  return {
    registerReducer,
  }
}
