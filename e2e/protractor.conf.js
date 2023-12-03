// protractor.conf.js
exports.config = {
    specs: ['/C:/Users/xiaob/proyectoionic/support-me/e2e>'],  // 指定测试文件路径
    capabilities: {
      browserName: 'chrome',  // 选择浏览器
    },
    directConnect: true,
    baseUrl: 'http://localhost:8100/',  // 修改为你的应用程序地址
    framework: 'jasmine',  // 使用Jasmine测试框架
    onPrepare() {
      // 预处理代码，如果需要的话
    },
  };
  