const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      let id = state.dialogsData.length + 1;
      let randomName = Math.random()
        .toString(36)
        .substring(7);
      if (body !== "") {
        state.dialogsData.push({
          id: id,
          name: randomName,
          message: body
        });
      }
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};
export const updateNewMessageBodyCreator = value => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: value
  };
};

export default dialogsReducer;
