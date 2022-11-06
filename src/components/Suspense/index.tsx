import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useToggle } from '../../commons/hooks/useToggle';
import { FlexGrowBox, HStack } from '../atoms/Layout';
import { Loading } from '../atoms/Loading';
import { FetchSuspense } from '../atoms/System';
import { AfterReact18 } from './AfterReact18';
import { AfterReact18Slow } from './AfterReact18Slow';
import { BeforeReact18 } from './BeforeReact18';
import { MenuBar } from './MenuBar';
import { Tabs } from './Tabs';

export const SuspenseL = () => {
  const { toggleKey, isPending, onToggle } = useToggle<'Fast' | 'Slow'>('Fast');
  return (
    <div>
      <p>Suspense</p>
      <BeforeReact18 />
      <HStack width="1024px">
        <MenuBar />
        <FlexGrowBox>
          <Tabs
            isPending={isPending}
            onFast={() => {
              onToggle('Fast');
            }}
            onSlow={() => {
              onToggle('Slow');
            }}
            toggleKey={toggleKey}
          />
          <FetchSuspense>
            {toggleKey === 'Fast' ? (
              <AfterReact18  />
            ) : (
              <AfterReact18Slow  />
            )}
          </FetchSuspense>
        </FlexGrowBox>
      </HStack>
    </div>
  );
};
