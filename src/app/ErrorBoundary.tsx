import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Hook for an error-reporting service (Sentry, Datadog, …). */
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
}

/** Catches render errors so one broken section shows a fallback instead of a blank page. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
    if (import.meta.env.DEV) console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div role="alert" className="grid min-h-screen place-items-center p-6 text-center">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Something went wrong.</h1>
          <p className="mb-5 text-muted">Please reload the page.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-[10px] border border-line bg-card px-5 py-3 text-sm font-semibold"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}
