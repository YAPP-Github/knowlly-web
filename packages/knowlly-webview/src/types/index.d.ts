export {};

declare global {
  interface Window {
    Android: {
      showToast: (message: string) => void;
      navigateUp: () => void;
      navigateToLecture: (lectureInfoId: number) => void;
      navigateToCategory: (category: string) => void;
      navigateToSearch: () => void;
    };
  }
}
