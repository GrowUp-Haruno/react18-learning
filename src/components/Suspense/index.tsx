import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Loading } from '../atoms/Loading';
import { AfterReact18 } from './AfterReact18';
import { BeforeReact18 } from './BeforeReact18';

export const SuspenseL = () => {
  return (
    <div>
      <p>Suspense</p>
      {/* <BeforeReact18 /> */}
      <ErrorBoundary fallback={<p>BeforeReact18 ロード失敗</p>}>
        <Suspense fallback={<Loading />}>
          <AfterReact18 />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
