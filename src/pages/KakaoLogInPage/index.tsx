import { useSearchParams } from "react-router-dom";

const KakaoLogInPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  console.log(code);

  return <div>카카오 로그인 진행 중</div>;
};

export default KakaoLogInPage;
