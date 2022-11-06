import { Component, FC, ReactElement, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessage, LoadingMessage } from './TextMessage';

type SuspenseComponentProps = {
  SuspenseFallback: ReactNode;
  ErrorBoundaryFallback: ReactElement<
    unknown,
    string | React.FunctionComponent<{}> | typeof Component
  > | null;
  children: ReactNode;
};
export const SuspenseComponent: FC<SuspenseComponentProps> = ({
  ErrorBoundaryFallback,
  SuspenseFallback,
  children,
}) => {
  return (
    <ErrorBoundary fallback={ErrorBoundaryFallback}>
      <Suspense fallback={SuspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

type FetchSuspenseProps = {
  children: ReactNode;
};
export const FetchSuspense: FC<FetchSuspenseProps> = (props) => (
  <SuspenseComponent
    {...props}
    ErrorBoundaryFallback={<ErrorMessage />}
    SuspenseFallback={<LoadingMessage />}
  />
);
