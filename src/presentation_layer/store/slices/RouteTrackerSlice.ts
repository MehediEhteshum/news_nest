import { routes } from "@/utils/Constants";
import { Slice, createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: routes.home,
};

const routeTrackerSlice: Slice = createSlice({
  name: "routeTracker",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const { setRoute } = routeTrackerSlice.actions;
export default routeTrackerSlice.reducer;
