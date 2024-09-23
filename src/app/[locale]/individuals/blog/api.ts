import { blog, news, splashCards, upcomingBlogs } from "./types/blog";

export async function fecthBlogs(): Promise<Array<blog>> {
  return [
    {
      imgSrc: "/blogImage.png",
      content:
        "Four Things Every Mother Wants for Mother’s Day – and How to Turn Them Into the Perfect Experience Gift Read More...",
      date: "30,Jan 2021",
      authorName: "By Massage",
    },
    {
      imgSrc: "/blogImage.png",
      content:
        "Four Things Every Mother Wants for Mother’s Day – and How to Turn Them Into the Perfect Experience Gift Read More...",
      date: "30,Jan 2021",
      authorName: "By Massage",
    },
    {
      imgSrc: "/blogImage.png",
      content:
        "Four Things Every Mother Wants for Mother’s Day – and How to Turn Them Into the Perfect Experience Gift Read More...",
      date: "30,Jan 2021",
      authorName: "By Massage",
    },
    {
      imgSrc: "/blogImage.png",
      content:
        "Four Things Every Mother Wants for Mother’s Day – and How to Turn Them Into the Perfect Experience Gift Read More...",
      date: "30,Jan 2021",
      authorName: "By Massage",
    },
  ];
}

export async function fetchNewsAndMedia(): Promise<Array<news>> {
  return [
    {
      imgSrc: "/Rectangle 304.png",
      content: "Our Expands to Bring Massage Into More Cities and Homes",
    },
    {
      imgSrc: "/Rectangle 304.png",
      content: "Our Expands to Bring Massage Into More Cities and Homes",
    },
  ];
}

export async function fetchSplashCardsData(): Promise<Array<splashCards>> {
  return [
    {
      category: "LIFESTYLE MASSAGE",
      title:
        "Seld-Massage Techniques to Keep Your Travel Adventures Fun and Pain-Free",
      author: "By MELANIE PEDDLE",
      date: "30,Jan 2021",
    },
  ];
}

export async function fetchUpcomingBlogData(): Promise<Array<upcomingBlogs>> {
  return [
    {
      imgSrc: "/Rectangle 269 (2).png",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
}

export async function fetchSecondaryBlogs(): Promise<Array<splashCards>> {
  return [
    {
      category: "HEALTH & WELLNESS, MASSAGE EXPERIENCE",
      title: "What is the Best Massage Membership (and Why Do You Need it)?",
      author: "ByMassage",
      date: "30,Jan 2021",
      body: " Are you an athlete, gym buff, working mom, stressed-out dad, wellness junkie, desk jockey, dancer,…",
      imgSrc: "/Rectangle 301.png",
    },
    {
      category: "FITNESS & TRAINING",
      title:
        "How the Military Gets in Shape – and How You, Too, Can Train Like a Soldier",
      author: "ByMassage",
      date: "30,Jan 2021",
      imgSrc: "/Rectangle 302.png",
      body: "If you’ve found this post, it’s safe to assume you’ve got serious fitness ambitions. And…",
    },
    {
      category: "BENEFITS OF MASSAGE, HEALTH & WELLNESS",
      title: "Bunion Bummers – and How Massage Can Help",
      body: "The holiday season has come to a close, which can bring a welcome reprieve from…",
      author: "ByMassage",
      date: "30,Jan 2021",
      imgSrc: "/Rectangle 303.png",
    },
  ];
}
