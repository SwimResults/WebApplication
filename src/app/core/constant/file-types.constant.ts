export interface FileType {
  icon: string;
  color: string;
}

export let fileTypes = new Map<string, FileType>([
  ["pdf", {
    icon: "description",
    color: "pdf"
  }],
  ["dsv6", {
    icon: "article",
    color: "dsv"
  }],
  ["dsv7", {
    icon: "article",
    color: "dsv"
  }],
  ["zip", {
    icon: "folder_zip",
    color: "zip"
  }],
]);
