export interface Event {
  id: number;
  name: string;
  start: string;
  end: string;
  content: string;
  phone: string;
  hashtag: string;
  slug: string;
  format: {
    id: number;
    name: string;
    slug: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
  };
  venue: {
    id: number;
    name: string;
    about: string;
    address: string;
    slug: string;
    city: {
      id: number;
      name: string;
    };
  };
  poster_url: string;
  ticket_url: string;
  tags: [{ id: number; name: string }];
}
