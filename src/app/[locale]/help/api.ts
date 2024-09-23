import { Content } from "./types/types";

export async function fetchContent(): Promise<Array<Content>> {
  return [
    {
      title: "In-Home Massage",
      questions: [
        "How do I pay for Mrs Lara massage with an HSA/FSA account?",
        "Who are the therapists providing Mrs Lara chair massage?",
        "Why can't Mrs Lara verify my identity?",
        "Why does Mrs Lara include an automatic 18% tip for massage therapists?",
        "Why does Mrs Lara need to verify my identity?",
        "Can I use my health insurance to pay for my massage?",
      ],
    },
    {
      title: "Mrs Lara Membership",
      questions: [
        "Where is the Mrs Lara membership plan available?",
        "What should I wear for an assisted stretch session?",
        "What is Mrs Lara membership?",
        "How should I prepare for an assisted stretch session?",
        "Why should I become a Mrs Lara member?",
        "Should I stretch before or after a workout?",
      ],
    },
    {
      title: "Repeat Bookings",
      questions: ["How do I book the same massage therapist again?"],
    },
    {
      title: "In-Home Stretching",
      questions: [
        "What are METs?",
        "Who are the stretch pros working with Mrs Lara?",
        "Where are Mrs Lara assisted stretch sessions performed?",
      ],
    },
    {
      title: "Trust & Safety for Customers",
      questions: [
        "Does Mrs Lara have requirements for the providers in the Mrs Lara network?",
        "Can I prevent a specific provider from being booked on my appointment if I don't want to see them again?",
        "How do I report a problem or negative experience with a provider?",
      ],
    },
    {
      title: "PCR/Covid Testing",
      questions: [
        "If I believe I was exposed to Covid-19, how soon should I be tested?",
      ],
    },
  ];
}
