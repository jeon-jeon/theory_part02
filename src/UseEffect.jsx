import { useEffect, useState } from "react";

const UseEffect = () => {
  // const [books, setBooks] = useState([]);

  // 컴포넌트가 랜더링(그려진) 이후에 side effect[부수효과]를 처리하기 위해서 사용함!
  // 부수효과: 데이터 가져오기, 타이머설정, 로컬저장
  // useEffect(() => {
  //   fetch("https://fakerapi.it/api/v2/books?_quantity=5")
  //     .then((res) => res.json())
  //     .then((v) => setBooks((prev) => [...v.data]));
  // }, []);

  const [imgs, setImgs] = useState([]);
  const [test, setTest] = useState(false);

  useEffect(() => {
    fetch(
      "https://fakerapi.it/api/v2/images?_quantity=10&_type=any&_height=300"
    )
      .then((res) => res.json())
      .then((v) => {
        setImgs((prev) => [...v.data]);
      });
  }, [test]);
  return (
    <>
      <button onClick={() => setTest((prev) => !prev)}>로켓트 클릭</button>
      {imgs.map((v, i) => (
        <Image key={i} {...v}></Image>
      ))}

      {/* {books.map((v) => (
        <Book {...v} />
      ))} */}
    </>
  );
};

export default UseEffect;
