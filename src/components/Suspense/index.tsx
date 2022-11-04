import { AfterReact18 } from './AfterReact18';
import { BeforeReact18 } from './BeforeReact18';

export const Suspense = () => {
  return (
    <div>
      <p>Suspense</p>
      <BeforeReact18 />
      <AfterReact18 />
    </div>
  );
};
