import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

export default function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={` ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      } capitalize hover:underline decoration-orange-400 orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 cursor-pointer hover:font-bold hover:scale-110 transition-transform duration-200 ease-out dark:text-white`}
    >
      {category}
    </Link>
  );
}
