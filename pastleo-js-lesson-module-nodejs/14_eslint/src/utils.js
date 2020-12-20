export const timeoutPromise = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

export const removeGreeting = () => {
  const greetingDiv = document.getElementById('greeting');
  if (greetingDiv) {
    greetingDiv.remove();
  }
};
