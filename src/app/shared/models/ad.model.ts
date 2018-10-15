export class Ad {
  title: string;
  description: string;
  category: string;
  owned: string;
  created: string;

  constructor(title: string,
              description: string,
              category: string,
              owned: string,
              created: string) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.created = created;
    this.owned = owned;
  }
}
