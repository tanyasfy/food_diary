declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

type ImportMetaEnv = Readonly<Record<string, string>>;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// web worker
declare module '*?worker' {
  const workerConstructor: {
    new (): Worker;
  };
  export default workerConstructor;
}
