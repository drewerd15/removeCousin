const relationList = [];
function addRelation(e) {
  relationList.push(e.target.name);
  console.log("this", e.target.name);
}
