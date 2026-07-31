export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  photo?: string;
  emoji?: string;
}

export interface RelationshipDates {
  startDate: string;
  firstKiss?: string;
  firstTrip?: string;
}
