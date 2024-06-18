declare module 'react-native-config' {
  interface Env {
    // app
    API_URL: string
  }

  const BuildConfig: Env

  export default BuildConfig
}
