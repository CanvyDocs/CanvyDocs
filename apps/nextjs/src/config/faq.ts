export interface FAQType {
  id: string;
  question: string;
  answer: string;
}

export const FAQItems: Record<string, FAQType[]> = {
  en: [
    {
      id: "q-1",
      question: "How does it work?",
      answer:
        "If you have worked with Miro before, you should feel right at home using CanvyDocs. It's a canvas based collaboration tool. ",
    },
    {
      id: "q-2",
      question: "Is CanyvDocs for me?",
      answer:
        "Yes, CanyvDocs is for teams of all sizes and individuals. If you looking to do some planning on a whiteboard, wireframing or keeping track of tasks on a kanban, open and work on multiple docs/wikis on an infinite canvas, you will get a lot of value from CanvyDocs.",
    },
    {
      id: "q-3",
      question: "Can I self host it?",
      answer:
        "Yes, in the near future, there will be comprehensive docs and docker images to self host CanvyDocs on your own hardware for free of charge.",
    },
  ],
};
