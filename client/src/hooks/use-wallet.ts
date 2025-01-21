import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface WalletState {
  address: string | null;
  balance: number;
  isConnected: boolean;
}

export function useWallet() {
  const [state, setState] = useState<WalletState>({
    address: null,
    balance: 0,
    isConnected: false
  });
  const { toast } = useToast();

  const checkConnection = async () => {
    try {
      // Check if ArConnect is available
      if (typeof window.arweaveWallet === 'undefined') {
        return;
      }

      const isConnected = await window.arweaveWallet.isConnected();
      if (isConnected) {
        const address = await window.arweaveWallet.getActiveAddress();
        setState(prev => ({ ...prev, address, isConnected: true }));
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
      // Silent fail on initial check - don't show error toast
    }
  };

  const connect = async () => {
    try {
      if (!window.arweaveWallet) {
        toast({
          title: "ArConnect Not Found",
          description: "Please install ArConnect to continue",
          variant: "destructive"
        });
        return;
      }

      await window.arweaveWallet.connect([
        'ACCESS_ADDRESS',
        'SIGN_TRANSACTION'
      ]);

      const address = await window.arweaveWallet.getActiveAddress();
      setState({
        address,
        balance: 10000, // Starting balance for new users
        isConnected: true
      });

      toast({
        title: "Wallet Connected",
        description: "Successfully connected to ArConnect"
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to ArConnect",
        variant: "destructive"
      });
    }
  };

  const disconnect = async () => {
    try {
      await window.arweaveWallet.disconnect();
      setState({
        address: null,
        balance: 0,
        isConnected: false
      });

      toast({
        title: "Wallet Disconnected",
        description: "Successfully disconnected from ArConnect"
      });
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return {
    ...state,
    connect,
    disconnect
  };
}