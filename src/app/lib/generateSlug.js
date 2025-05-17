export function generateSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove all non-alphanumeric characters except spaces and dashes
      .replace(/\s+/g, "-")         // replace spaces with dashes
      .replace(/-+/g, "-");         // collapse multiple dashes into one
  }