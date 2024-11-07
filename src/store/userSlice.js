import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  photoURL: "",
  displayName: "",
};

// createSlice : 리듀서 함수와 액션 생성 함수를 동시에 만든다.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.photoURL = "";
      state.displayName = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions; // 액션 생성 함수로, 특정 상태 업데이트 작업을 요청할 때 사용
export default userSlice.reducer; // 상태 업데이트를 실제로 수행하는 함수로, 이 리듀서를 export default하여 스토어 설정 시 가져와 사용
