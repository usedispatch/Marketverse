declare interface Window {
  arweaveWallet: {
    connect: (permissions: string[]) => Promise<void>;
    disconnect: () => Promise<void>;
    getActiveAddress: () => Promise<string>;
    isConnected: () => Promise<boolean>;
  };
}
