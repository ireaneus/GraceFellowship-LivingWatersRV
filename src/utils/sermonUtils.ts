import { sermons, type Sermon } from '../content/sermons/sermons';
import { albums, type Album } from '../content/sermons/albums';

export function getUniqueAlbums(): string[] {
  return [...new Set(sermons.map(sermon => sermon.album))].filter(Boolean).sort();
}

export function getSermonsByAlbum(album: string): Sermon[] {
  return sermons.filter(sermon => sermon.album === album && sermon.name);
}

export function getSermonBySlug(slug: string): Sermon | undefined {
  if (!slug) return undefined;
  return sermons.find(sermon => sermon.name?.replace('.mp3', '')?.replace(/[^a-zA-Z0-9-]/g, '-') === slug);
}

export function getPdfUrl(sermon: Sermon): string | null {
  if (!sermon?.pdf) return null;
  return `/${sermon.path}${sermon.pdf}`;
}

export function getAudioUrl(sermon: Sermon): string {
  if (!sermon?.path || !sermon?.name) return '';
  return `/${sermon.path}${sermon.name}`;
}

export function getImageUrl(sermon: Sermon): string | null {
  if (!sermon?.jpg) return null;
  return `/${sermon.path}${sermon.jpg}`;
}

export function getAlbumInfo(albumId: string): Album | undefined {
  if (!albumId) return undefined;
  return albums.find(album => album.id === albumId);
}

export function getAllAlbums(): Album[] {
  return albums;
}

export function getAllSermons(): Sermon[] {
  return sermons.filter(sermon => sermon.name && sermon.path);
}