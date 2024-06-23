import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import RouteTrackerSlice from "./slices/RouteTrackerSlice";

const store: EnhancedStore = configureStore({
  reducer: {
    routeTracker: RouteTrackerSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
