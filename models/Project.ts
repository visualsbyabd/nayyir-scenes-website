export interface Project {
  id: string;
  title: string;
  subtitle: string;
  genreId: number;
  likes: number;
  views: number;
  comments: number;
  videoUrl: string;
  videoThumbnailUrl: string;
  addedIn?: number;
  aspectRatio?: "16/9" | "9/16";
}
