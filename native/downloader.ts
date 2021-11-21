import { blobWriter } from '.';
import { Directory } from '@capacitor/filesystem';
import { lookup } from 'mime-types';

const downloader = {
  async downloadFile(url: string, name: string) {
    const res = await fetch(url, { headers: {} });
    const extension = lookup(url);
    const data = await res.blob();
    const path = `${name}.${extension}`;
    const { Data: directory } = Directory;
    const recursive = true;
    const fallback = false;

    const { uri } = await blobWriter.writeFile({
      path,
      directory,
      data,
      recursive,
      fallback,
    });

    return uri;
  },
};

export { downloader };
