// All paths from source to target

var allPathsSourceTarget = function (graph) {
  const res = [];

  const dfs = (i, stack) => {
    if (stack.includes(i)) return;

    stack.push(i);

    if (i === graph.length - 1) res.push(stack);
    else graph[i].forEach((node) => dfs(node, [...stack]));
  };

  dfs(0, []);
  return res;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
