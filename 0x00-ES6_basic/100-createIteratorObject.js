export default function createIteratorObject(report) {
  return (function* _default() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
