export interface FileType {
  icon: string;
  color: string;
  download: boolean;
}

export const fileTypes = new Map<string, FileType>([
    ["pdf", {
        icon: "description",
        color: "pdf",
        download: false
    }],
    ["dsv6", {
        icon: "article",
        color: "dsv",
        download: true
    }],
    ["dsv7", {
        icon: "article",
        color: "dsv",
        download: true
    }],
    ["zip", {
        icon: "folder_zip",
        color: "zip",
        download: true
    }],
    ["lef", {
        icon: "article",
        color: "lef",
        download: true
    }],
    ["lxf", {
        icon: "folder_zip",
        color: "lef",
        download: true
    }],
]);
