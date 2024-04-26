export interface Food {
  food_id: string;
  cat_id: number;
  name?: string | undefined;
  kkal?: number | undefined;
  prot?: number | undefined;
  fett?: number | undefined;
  kohlenhydraten?: number | undefined;
}