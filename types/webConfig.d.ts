// export type IArticleType = {
//   articleContent: string;
//   articleTitle: string;
//   articleCover?: string;
//   categoryName?: string;
//   id?: number;
//   isTop?: number;
//   originalUrl?: string;
//   status?: number;
//   tagNameList?: any;
//   type?: number;
// };
// export interface IStore {
//   article: IArticleType;
//   dialogFlag: boolean;
// }

type IWebSiteConfig = {
  alipayQRCode: string
  articleCover: string
  gitee: string
  github: string
  isChatRoom: number
  isCommentReview: number
  isEmailNotice: number
  isMessageReview: number
  isMusicPlayer: number
  isReward: number
  qq: string
  socialLoginList: string[]
  socialUrlList: string[]
  touristAvatar: string
  userAvatar: string
  websiteAuthor: string
  websiteAvatar: string
  websiteCreateTime: string
  websiteIntro: string
  websiteName: string
  websiteNotice: string
  websiteRecordNo: string
  websocketUrl: string
  weiXinQRCode: string
}
export interface IData {
  articleCount: number
  categoryCount: number
  tagCount: number
  viewsCount: string
  websiteConfig: IWebSiteConfig
}