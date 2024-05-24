import axios from "axios";

// 원격 서버
export const URL = "http://localhost:8000";

export const customAxios = axios.create({
  baseURL: URL,
  // withCredentials: true, // withCredentials를 true로 설정하여 CORS 요청 시 쿠키를 포함합니다
});

customAxios.interceptors.request.use(
  //axios 요청 직전에 발생하는 함수
  function (config) {
    //토큰 자동추가 함수
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  //axios 요청 에러나면 발생하는 함수
  function (error) {
    return Promise.reject(error);
  }
);
customAxios.interceptors.response.use(
  //axios 올바른 response가오면 발동하는 함수
  function (response) {
    return response;
  },

  //에러 메시지가 response되면 발동되는 함수
  async function (error) {
    if (error.response && error.response.status === 401) {
        // 예: 인증 오류 발생 시 로그아웃 처리
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    return Promise.reject(error);
  }
);


