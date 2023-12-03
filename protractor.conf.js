// protractor.conf.js
exports.config = {
    // ... 其他配置
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        binary: 'C:/Program Files/Google/Chrome/Application/chrome.exe',  // 修改为你的 Chrome 安装路径
        args: ['--no-sandbox'],  // 可选，某些系统需要
      },
      // 不需要指定 chromeDriver 选项
    },
    // ... 其他配置
  };
  