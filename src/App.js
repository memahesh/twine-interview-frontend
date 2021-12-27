import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ExplorerView from "pages/ExplorerView";
import DashboardView from "pages/DashboardView";
import CpoHqForumView from "pages/CpoHqForumView";
import CpoHqPollsView from "pages/CpoHqPollsView";

import routes from "routes";
import CounterContextProvider from "provider/CounterContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import BaseLayout from "layout/BaseLayout";

const pages = [
  { exact: true, path: routes.dashboard, showSider:false, component: DashboardView },
  { exact: true, path: routes.explorer, showSider: false, component: ExplorerView },
  { exact: true, path: routes.cpoHqForum, showSider: true, component: CpoHqForumView },
  { exact: true, path: routes.cpoHqPolls, showSider: true, component: CpoHqPollsView },
];

const queryClient = new QueryClient();

const App = () => {
  return (
    <CounterContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="page-wrapper" style={{ backgroundColor: "ghostwhite" }}>
          <Switch>
            {pages.map(({ exact, path, showSider, component: Component }) => {
              return (
                  <Route
                    key={path}
                    exact={exact}
                    path={path}
                    showSider = {showSider}
                  >
                    <BaseLayout>
                      <Component showSider={showSider} />
                    </BaseLayout>
                  </Route>
              );
            })}
            <Redirect to={routes.dashboard} />
          </Switch>
        </div>
      </QueryClientProvider>
    </CounterContextProvider>
  );
};

export default App;
