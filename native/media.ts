import { Media, MediaAlbum } from '@capacitor-community/media';
import { isIos } from './device';
const _media = new Media();

export const media = {
  async findAlbumOrCreate(name: string) {
    const { albums } = await _media.getAlbums();
    const commafulAlbum = albums.find(item => item.name === name);
    if (!commafulAlbum) {
      await _media.createAlbum({ name });
    }
  },
  async getAlbum (albumName: string) {
    await media.findAlbumOrCreate(albumName);
    const { albums = [] as MediaAlbum[] } = await _media.getAlbums();
    const { identifier, name } = (albums.find((item: MediaAlbum) => item.name === albumName)) || {} as MediaAlbum;
    const _isIos = await isIos();
    return _isIos
      ? identifier
      : name;
  },
  async saveMediaToGallery(path: string, albumName = 'commaful') {
    const album = await media.getAlbum(albumName);

    await _media
      .saveVideo({ path, album });
  }
};
