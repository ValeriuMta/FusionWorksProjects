

export const IgnoreUncaughtException = () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  });
}