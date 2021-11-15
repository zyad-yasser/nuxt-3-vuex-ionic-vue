import { blobWriter } from ".";
import { Directory } from "@capacitor/filesystem";

const downloader = {
  async downloadActivity(activity) {
    try {
      const id = activity.object.id;
      const videoUrl = activity.object.share_vid.replace("https", "http");
      const res = await fetch(videoUrl, {headers: {}});
      const blob = await res.blob();
      const { uri } = await blobWriter.writeFile({
        path: `${id}.mp4`,
        directory: Directory.Data,
        data: blob,
        recursive: true,
        fallback: async (err) => {},
      });
      return uri;
    } catch (e) {}
  },
  async downloadVideo(videoUrl, id) {
    try {
      const res = await fetch(videoUrl, {headers: {}});
      const blob = await res.blob();
      const { uri } = await blobWriter.writeFile({
        path: `${id}.mp4`,
        directory: Directory.Data,
        data: blob,
        recursive: true,
        fallback: async (err) => {},
      });
      return uri;
    } catch (error) {}
  },
};

export { downloader };
