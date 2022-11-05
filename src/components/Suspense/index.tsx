import { Suspense } from 'react';
import { Loading } from '../atoms/Loading';
import { AfterReact18 } from './AfterReact18';
import { BeforeReact18 } from './BeforeReact18';

export const SuspenseL = () => {
  return (
    <div>
      <p>Suspense</p>
      {/* <BeforeReact18 /> */}
      <Suspense fallback={<Loading />}>
        <AfterReact18 />
      </Suspense>
    </div>
  );
};
