import Balancer from "react-wrap-balancer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@canvydocs/ui/accordion";

import { FAQItems } from "~/config/faq";
import type { Locale } from "~/config/i18n-config";

export function FAQs({
  params: { lang },
  dict,
}: {
  params: {
    lang: Locale;
  };
  dict: Record<string, string>;
}) {
  const FAQsData = FAQItems[lang];
  return (
    <section className="container max-w-3xl py-2">
      <div className="mb-14 space-y-6 text-center">
        <h3 className="font-heading text-4xl font-[500] leading-tight text-black lg:text-7xl">
          <Balancer>{dict.faq}</Balancer>
        </h3>
        <p className="text-xl text-muted-foreground">
          <Balancer>{dict.faq_detail}</Balancer>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {FAQsData?.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger className="text-xl">
              {faqItem.question}
            </AccordionTrigger>
            <AccordionContent className="text-xl">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
