export type Label = "DO_NOW" | "SCHEDULE" | "BREAKDOWN" | "THINK" | "DROP";

export type InboxItem = {
  id: string;
  rawText: string;
  triaged: boolean;
  label?: Label;
};
