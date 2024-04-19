import ROUTE_PATH from "../../router/constants";

const { VITE_KAKAO_REST_API_KEY } = import.meta.env;

const IntroPage = () => {
  const REDIRECT_URI = `${window.location.origin}${ROUTE_PATH.KAKAO_LOGIN_REDIRECT}`;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <h2>Intro</h2>
      <a href={link}>카카로 로그인</a>
    </div>
  );
};

export default IntroPage;
