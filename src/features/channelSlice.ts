import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  channelId: null,
  channelName: null,
};
export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannelInfo: (state: any, action: any) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;
export const setChannelId = (state: any) => state.channel.channelId;
export const setChannelName = (state: any) => state.channel.channelName;

export default channelSlice.reducer;