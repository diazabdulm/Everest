export default function getInitials(name) {
  const names = name.split(" ");
  let initials = names[0].substring(0, 1).toUpperCase(); // get the first name, and get the first letter

  // If there are more than one name, take the first letter of the last name
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
}
