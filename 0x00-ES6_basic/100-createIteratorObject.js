export default function createIteratorObject(report) {
  const myarr = [];
  for (const employee of Object.values(report.allEmployees)) {
    myarr.push(...employee);
  }

  return myarr;
}
