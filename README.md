## description
react + typescript 초기설정 탬플릿 입니다. 기본적인 axios, react-query, react-router-dom가 default 값으로 초기설정 되어있습니다.


## npm 추가 설치 목록
- [x] axios
- [x] react-router-dom
- [x] @tanstack/react-query
- [x] @mui/material 
- [x] @emotion/react 
- [x] @emotion/styled


## index.tsx 초기설정
```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router, queryClient } from "./config";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
```


## react-router-dom 초기설정
```
import Main from "../pages/Main";
import Test from "../pages/Test";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

```


## react-query 초기 설정
```
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

```