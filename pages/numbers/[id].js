import { useRouter } from "next/router";

export default function NumbersPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Your number is: {id}</div>;
}
