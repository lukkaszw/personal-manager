export const parseLanguage = (lang) => {
  const parts = lang.split('-');

  return parts[0];
}