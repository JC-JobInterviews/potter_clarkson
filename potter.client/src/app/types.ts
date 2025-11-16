export type IntellectualPropertyAsset = {
  id: string; // TODO - I would use a type like UUID/GUID for this, normally generated for us by NoSQL DB's.
  title: string;
  client: string;
  type: 'Patent' | 'Trade Mark';
  description?: string;
  dateCreated: Date;
};