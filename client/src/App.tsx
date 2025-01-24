import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/landing";
import Agents from "@/pages/agents";
import AgentDetail from "@/pages/agent/[id]";
import Markets from "@/pages/markets";
import Asset from "@/pages/asset";
import Leaderboard from "@/pages/leaderboard";
import NotFound from "@/pages/not-found";
import AppLayout from "@/components/layout/app-layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/app">
        {() => (
          <AppLayout>
            <Agents />
          </AppLayout>
        )}
      </Route>
      <Route path="/agent/:id">
        {(params) => (
          <AppLayout>
            <AgentDetail />
          </AppLayout>
        )}
      </Route>
      <Route path="/markets">
        {() => (
          <AppLayout>
            <Markets />
          </AppLayout>
        )}
      </Route>
      <Route path="/markets/:id">
        {(params) => (
          <AppLayout>
            <Asset />
          </AppLayout>
        )}
      </Route>
      <Route path="/leaderboard">
        {() => (
          <AppLayout>
            <Leaderboard />
          </AppLayout>
        )}
      </Route>
      <Route>
        {() => (
          <AppLayout>
            <NotFound />
          </AppLayout>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;