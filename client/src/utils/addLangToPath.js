import i18n from "../i18n/i18n";

export default function addLangToPath(path) {
  return "/" + i18n.language + "/" + path;
}
