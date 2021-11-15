import { Media } from '@capacitor-community/media';
import { device } from '.';
const _media = new Media();

const media = {
  async findAlbumOrCreate(name) {
    const { albums } = await _media.getAlbums();
    const commafulAlbum = albums.find(item => item.name === name);
    if (!commafulAlbum) {
      await _media.createAlbum({ name });
    }
  },
  async getAlbum(name) {
    await findAlbumOrCreate(name);
    const { albums } = await _media.getAlbums();
    commafulAlbum = albums.find(item => item.name === name);
    const info = await device.getInfo();
    const { platform } = info;
    return platform === 'ios'
      ? commafulAlbum.identifier
      : commafulAlbum.name;
  },
  async saveMediaToGallery(path, _album = 'commaful') {
    const info = await device.getInfo();
    const { platform } = info;

    const album = platform === 'ios' ? await this.findAlbumOrCreate(_album) : '';

    await _media
      .saveVideo({ path, album });
  }
};

export { media }
