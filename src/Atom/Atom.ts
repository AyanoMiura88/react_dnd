import { atom } from "recoil";

export interface DataInfo {
  id: number;
  name: string;
  level: number;
  isShow: boolean;
}

export const TableHeader = atom<string[]>({
  key: "tableHeader",
  default: ["id", "名前", "レベル"],
});

// 仮data
export const TableAtomState = atom<DataInfo[]>({
  key: "tableAtom",
  default: [
    { id: 1, name: "Taro", level: Math.random(), isShow: true },
    { id: 2, name: "Jiro", level: Math.random(), isShow: true },
    { id: 3, name: "Saburo", level: Math.random(), isShow: true },
    { id: 4, name: "Shiro", level: Math.random(), isShow: true },
    { id: 5, name: "Goro", level: Math.random(), isShow: true },
    { id: 6, name: "Mutsumi", level: Math.random(), isShow: true },
    { id: 7, name: "Nanako", level: Math.random(), isShow: true },
    { id: 8, name: "Yaeko", level: Math.random(), isShow: true },
    { id: 9, name: "Kyuro", level: Math.random(), isShow: true },
    { id: 10, name: "juro", level: Math.random(), isShow: true },
  ],
});
