import React, { FC } from 'react';
import { ApiDefinitionOverview } from './pages/ApiDefinitionOverview';
import { Headline } from './components/Headline';

const App: FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <Headline size="3xl" className="px-4">
              SmartBear Coding Challenge
            </Headline>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <ApiDefinitionOverview />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
