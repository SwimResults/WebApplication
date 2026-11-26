import type * as ApiUser from '@swimresults/api/user';
export type Widget = Omit<ApiUser.Widget, 'size'> & {
  size: "SMALL" | "MEDIUM" | "LARGE";
};
