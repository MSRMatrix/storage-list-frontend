export function activateMessage(topic, text, color, active, setMessageContext) {
  setMessageContext((prev) => ({
    ...prev,
    topic: topic,
    text: text,
    color: color,
    active: active,
  }));
}
export function deActivateMessage(
  topic,
  text,
  color,
  active,
  setMessageContext,
) {
  setMessageContext({ topic: "", text: "", color: "", active: false });
}
