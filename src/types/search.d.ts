export type SearchModifier = "everywhere" | "intitle" | "inauthor" | "subject";

export type SearchInput = { criteria: string; modifier: SearchModifier };
