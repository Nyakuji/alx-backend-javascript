export default function getListStudentIds(studeList) {
  if (!Array.isArray(studeList)) {
    return [];
  }
  return studeList.map((student) => student.id);
}
