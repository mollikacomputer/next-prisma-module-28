

import { getMe } from "@/service/getMe";

export default async function Home () {

  const user = await getMe();

  console.log(user,"This is user vai==========")
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

          <h2 className="text-3xl">Main  Root page</h2>

      </main>
    </div>
  );
}
