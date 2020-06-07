import { newsDetails } from "../shared/news.model";

export class News {
  public name: string;
  public description: string;
  public imagePath: string;
  public news : newsDetails[]

  constructor(name: string, desc: string, imagePath: string, news : newsDetails[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.news = news
  }
}
