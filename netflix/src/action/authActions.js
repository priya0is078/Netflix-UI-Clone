export const loginUser = (credentials) => async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
  
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  