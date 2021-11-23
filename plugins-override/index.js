const fs = require('fs-extra');

async function copy(src, dest) {
  try {
    await fs.copy(src, dest, { overwrite: true, errorOnExist: false });
    return true;
  } catch (error) {
    if (error.message.includes("already exists")) {
      return false;
    }
    throw error;
  }
}

async function main() {
	await copy('./plugins-override/date-picker/ios/Plugin.swift', './node_modules/@capacitor-community/date-picker/ios/Plugin/Plugin.swift');
	await copy('./plugins-override/media/ios/Plugin.swift', './node_modules/@capacitor-community/media/ios/Plugin/Plugin/Plugin.swift');
}

main();