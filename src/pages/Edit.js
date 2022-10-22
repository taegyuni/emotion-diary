import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("id:", id);

  const mode = searchParams.get("mode");
  console.log("mode:", mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정</p>

      {/* 쿼리 변경 가능. 그래서 useSearchParams를 사용 */}
      <button onClick={() => setSearchParams({ who: "taegyun" })}>
        QS 바꾸기
      </button>

      {/* 링크 태그 없이 네비게이트 가능 */}
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;