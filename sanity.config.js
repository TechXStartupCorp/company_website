import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure"; // Correct import for v3
import { schemaTypes } from "./sanity/schemaTypes";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: "rypvhweu", // Use public variable if in Next.js or similar
  dataset: "production", // Or your specific dataset

  plugins: [structureTool(), visionTool()], // Use the structureTool for custom Studio navigation

  schema: {
    types: schemaTypes, // Point to your schema types
  },
});



// Single workspace configuration

// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {schemaTypes} from './schemas'

// export default defineConfig({
//   projectId: '<projectId>',
// 	dataset: 'production',
//   plugins: [structureTool()],
//   schema: {
// 	  types: schemaTypes,
//   },
// })
