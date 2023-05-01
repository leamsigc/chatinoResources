declare module '#app' {
  interface NuxtApp {
    $auth: {
    loggedIn: any;
    session: AuthSession | undefined;
    redirectTo: globalThis.Ref<unknown>;
    refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;}
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
   $auth: {    loggedIn: any;
    session: AuthSession | undefined;
    redirectTo: globalThis.Ref<unknown>;
    refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;}
  }
}
export { }
