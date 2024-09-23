export type blog = {
  imgSrc: string;
  content: string;
  authorName: string;
  date: string;
};

export type news = {
  imgSrc: string;
  content: string;
};

export type splashCards = {
  category: string;
  title: string;
  author: string;
  date: string;
  imgSrc?: string;
  body?: string;
};

export type upcomingBlogs = {
  imgSrc: string;
  content: string;
};
