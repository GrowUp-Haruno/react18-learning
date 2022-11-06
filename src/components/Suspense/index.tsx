import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FlexGrowBox, HStack } from '../atoms/Layout';
import { Loading } from '../atoms/Loading';
import { FetchSuspense } from '../atoms/System';
import { AfterReact18 } from './AfterReact18';
import { AfterReact18Slow } from './AfterReact18Slow';
import { BeforeReact18 } from './BeforeReact18';
import { MenuBar } from './MenuBar';

export const SuspenseL = () => {
  return (
    <div>
      <p>Suspense</p>
      <BeforeReact18 />
      <HStack>
        <MenuBar />
        <FlexGrowBox>
          <FetchSuspense>
            <AfterReact18 />
          </FetchSuspense>
          <FetchSuspense>
            <AfterReact18Slow />
          </FetchSuspense>
        </FlexGrowBox>
      </HStack>
    </div>
  );
};
