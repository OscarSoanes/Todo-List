export function saveData(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}
