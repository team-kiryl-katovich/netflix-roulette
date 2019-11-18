export type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export type ErrorBoundaryState = {
  error: Error;
  errorInfo: React.ErrorInfo;
};
