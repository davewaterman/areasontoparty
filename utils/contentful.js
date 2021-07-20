const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function fetchEntry(id) {
  const entry = await client.getEntry(id);
  if (entry) return entry;
  console.log(`Error getting Entry for ${id}.`);
}

export default { fetchEntries };
