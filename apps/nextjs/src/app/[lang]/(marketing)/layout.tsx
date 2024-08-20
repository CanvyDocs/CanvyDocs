import Image from "next/image";

import { ModalProvider } from "~/components/modal-provider";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#fbf7ef]">
      <ModalProvider dict={dict.login} />
      <main className="flex-1">{children}</main>
      <footer>
        <div className="mx-auto mb-12 flex max-w-7xl items-center justify-center gap-4 pt-24">
          <Image src="/logo.svg" width="100" height="100" alt="Logo" />
          <p className="text-lg text-zinc-600">Open source Miro alternative</p>
        </div>
      </footer>
    </div>
  );
}
