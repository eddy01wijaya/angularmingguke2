export interface IPic {
  readonly id: number;
  src: string;
  readonly created: string;
  readonly updated: string;
  readonly owner: number;
  // readonly filename?: string;
  // readonly user?: {
  //   username: string;
  //   email: string;
  // };
}
