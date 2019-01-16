let envOption = {
  pro: '--env=pro',
  test: '--env=test',
  dev: '--env=dev'
};
module.exports = function getPresetEnv(arr) {
  for (let prop in envOption) {
    if (arr.indexOf(envOption[prop]) >= 0) {
      return prop;
    } else {
      return 'dev';
    }
  }
};
