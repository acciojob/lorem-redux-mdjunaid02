export const fetchLoremRequest = () => ({
  type: "FETCH_LOREM_REQUEST"
});

export const fetchLoremSuccess = data => ({
  type: "FETCH_LOREM_SUCCESS",
  payload: data
});

export const fetchLoremFailure = error => ({
  type: "FETCH_LOREM_FAILURE",
  payload: error
});

export const fetchLorem = () => {
  return dispatch => {
    dispatch(fetchLoremRequest());

    fetch("https://api.lorem.com/ipsum")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then(data => {
        dispatch(fetchLoremSuccess(data));
      })
      .catch(error => {
        dispatch(fetchLoremFailure(error.message));
      });
  };
};