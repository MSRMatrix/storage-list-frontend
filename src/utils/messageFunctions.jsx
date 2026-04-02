export function activateMessage(topic, text, status, setMessageContext) {
  setMessageContext({
    topic: topic,
    status: status,
    text: text,
    active: true,
  });
}
export function deActivateMessage(setMessageContext) {
  setMessageContext({ topic: "", text: "", status: "", active: false });
}
