import { writeFile } from "capacitor-blob-writer";

const blobWriter = {
  async writeFile(options) {
    return writeFile(options);
  },
};

export { blobWriter };
