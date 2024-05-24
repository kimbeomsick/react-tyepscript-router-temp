import { DefaultOptions, QueryClient } from "@tanstack/react-query";


const defaultOptions: DefaultOptions = {
  queries: {
    // 쿼리가 비활성 상태가 된 후 캐시에서 유지되는 시간 (기본값: 5분)
    gcTime: 1000 * 60 * 5,
    // 쿼리가 새로고침되기 전까지의 시간 (기본값: 0)
    staleTime: 0,
    // 쿼리가 실패한 후 재시도 횟수 (기본값: 3)
    retry: 3,
    // 재시도 간격 (기본값: 점진적 증가)
    retryDelay: (attemptIndex: any) =>
      Math.min(1000 * 2 ** attemptIndex, 30000),
    // 쿼리가 백그라운드에서 실행되는지 여부 (기본값: true)
    refetchOnWindowFocus: true,
    // 쿼리가 재실행되는 조건 (기본값: true)
    refetchOnReconnect: true,
    // 쿼리가 무효화되는지 여부 (기본값: true)
    refetchOnMount: true,
    // 자동으로 쿼리를 새로고침하는지 여부 (기본값: false)
    refetchInterval: false,
    // refetchInterval이 활성 상태인지 여부 (기본값: false)
    refetchIntervalInBackground: false,
    // 기본 쿼리 함수
  },
  mutations: {
    // 뮤테이션이 실패한 후 재시도 횟수 (기본값: 3)
    retry: 3,
    // 재시도 간격 (기본값: 점진적 증가)
    retryDelay: (attemptIndex: any) =>
      Math.min(1000 * 2 ** attemptIndex, 30000),
  },
};


export const queryClient = new QueryClient({ defaultOptions });