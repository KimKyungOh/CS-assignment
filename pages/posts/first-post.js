import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1> My name: 김경오 </h1>
      <h1> My hobby: Figure skating </h1>
      <h1> My age: 23 </h1>
      <h1> My MBTI: ENFJ </h1>
      <h1> My favorite food: Chicken </h1>
      <h1> My favorite animal: Puppy </h1>
      <h1> Welcome to my page! </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}