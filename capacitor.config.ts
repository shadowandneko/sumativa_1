import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'support-me',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  // 添加 Google Maps API 密钥配置
  plugins: {
    GoogleMaps: {
      apiKey: 'AIzaSyAbBUI4NYtxMFDCOlq2Bky6cvrnIiiPqic'
    }
  }
};

export default config;
