import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const response = await fetch("http://localhost:8081/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }

    const data = await response.json()
    
    console.log(data);

    return data
  }
)

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials) => {
    const response = await fetch(SIGN_UP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'authentification !")
    }

    const data = await response.json()

    console.log(data);

    return data
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged : true,
    isLoading: false,
    error: null
  },
  reducers: {
    setIsLogged(state, action) {
      state.isLogged = action.payload
    },
    removeUser(state) {
      localStorage.removeItem('token')
      state.isLogged = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false
      // state.error = action.payload
      // console.error("Identifiants inconnus")
      state.error = action.error.message  // Use action.error.message to get the error message
      console.error("Erreur HTTP:", action.error.message);
    })

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false
      localStorage.setItem('token', action.payload.token)
      state.isLogged = true
    })

    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false
      localStorage.setItem('token', action.payload.idToken)
    })
  }
})

export const { setUser, removeUser, setIsLogged } = authSlice.actions

export default authSlice.reducer