export interface DataInfo {
  name: string;
  level: number;
}

export const header = ["id", "名前", "レベル"];

export const data: DataInfo[] = [
  { name: "Taro", level: Math.random() },
  { name: "Jiro", level: Math.random() },
  { name: "Saburo", level: Math.random() },
  { name: "Shiro", level: Math.random() },
  { name: "Goro", level: Math.random() },
  { name: "Mutsumi", level: Math.random() },
  { name: "Nanako", level: Math.random() },
  { name: "Yaeko", level: Math.random() },
  { name: "Kyuro", level: Math.random() },
  { name: "juro", level: Math.random() },
];
