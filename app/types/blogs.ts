export interface BlogPosts {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  slug: string;
  user: {
    username: string;
  };
}
