export interface StorageFile {
  _id: string;
  meeting: string;
  path: string;
  url: string;
  name: string;
  extension: string;
  in_file_list: boolean;
  hidden: boolean;
  existing: boolean;
  downloads: number;
  ordering: number;
}
