<%*
const rangeExclusive = (start, stop, step = 1) => {
  let length = Math.ceil((stop - start) / step);
  return Array.from({ length }, (_, i) => start + i * step);
};

const toKebabCase = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/\-+/g, "-");
}

const folders = tp.file.folder(true).split("/");

let depthOptions = rangeExclusive(1, folders.length + 1);

let depthInput = await tp.system.suggester(
	(depth) => `"${folders.at(-depth)}" with depth: ${depth}`, depthOptions.reverse(), 
	true, 
	"From which parent folder should tags be created?", 
	10
);

let tags = folders.slice(-depthInput).map(toKebabCase);

tR += ["---", `tags: [${tags.join(", ")}]`, "---"].join("\n");
%><% tp.file.cursor() %>
