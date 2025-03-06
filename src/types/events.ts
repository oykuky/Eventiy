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


export type EventDetail = {
  id: number;
  name: string;
  slug: string;
  url: string;
  content: string;
  start: string;
  end: string;
  is_free: boolean;
  phone: string;
  email: string;
  hashtag: string;
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
    slug: string;
    about: string;
    lat: number;
    lng: number;
    phone: string;
    web_url: string;
    facebook_url: string;
    twitter_url: string;
    city: {
      id: number;
      name: string;
      slug: string;
    };
    district: {
      id: number;
      name: string;
      slug: string;
    };
    neighborhood: {
      id: number;
      name: string;
      slug: string;
    };
    address: string;
  };
  poster_url: string;
  ticket_url: string;
  tags: [{ id: number; name: string }];
}
