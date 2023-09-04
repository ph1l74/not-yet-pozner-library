export interface InterviewInfo {
  date: Date;
  guest: string;
}

export interface BookInfo {
  name: string;
  author: string;
  interview: InterviewInfo;
  tags: string[];
}
