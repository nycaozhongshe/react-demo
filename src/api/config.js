// let url = 'https://api.jiazhilifang.com/vc_recruit';
// let url = 'http://192.168.1.28:8080/vc_recruit';

// let url = 'http://192.168.1.24:8083/vc_recruit';

// let url = 'http://192.168.1.27:8088/vc_recruit';

let url = 'https://easy-mock.com/mock/59fc189c13b54e4771d525af/example';

// let url = 'http://39.104.179.182:8090/vc_recruit';


if ('production' === process.env.NODE_ENV)
  url = 'https://easy-mock.com/mock/59fc189c13b54e4771d525af/example';

module.exports = {
  baseUrl: url,
};
