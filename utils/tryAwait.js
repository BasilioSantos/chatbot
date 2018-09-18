module.expors = async (promise, callback) => {
  try {
    let resposta = await promise;
    callback(promise);
  } catch (error) {
    callback(error);
  }
};
