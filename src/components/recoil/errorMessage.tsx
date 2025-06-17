import { useMemo } from "react";
import { useRecoilCallback, useRecoilSnapshot } from "recoil";

interface QueryErrorMessageProps {
  error: string;
}

export default function QueryErrorMessage({ error }: QueryErrorMessageProps) {
    const snapshot = useRecoilSnapshot();
  
    const selectors = useMemo(() => {
      const ret = [];
      for (const node of snapshot.getNodes_UNSTABLE({ isInitialized: true })) {
        const { loadable } = snapshot.getInfo_UNSTABLE(node);
        if (loadable != null && loadable.state === 'hasError') {
          ret.push(node);
        }
      }
      return ret;
    }, [snapshot, error]);  
  
    const retry = useRecoilCallback(({ refresh }) =>
      () => selectors.forEach(refresh),
      [selectors],
    );
  
    return selectors.length > 0 && (
      <div>
        Error: {error.toString()}
        <br />
        Query: {selectors[0].key}
        <button onClick={retry}>Retry</button>
      </div>
    );
  }
  