export {};

declare global {
  interface Window {
    Android: {
      showToast: (message: string) => void;
      navigateUp: () => void;
    };
  }
}
