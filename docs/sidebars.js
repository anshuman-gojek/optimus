/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  docsSidebar: [
    'introduction',
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/installation",
        "getting-started/configuration"
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/create-job",
        "guides/adding-hook",
        "guides/create-bigquery-dataset",
        "guides/create-bigquery-table",
        "guides/create-bigquery-view",
        "guides/create-bigquery-external-table",
        "guides/organising-specifications",
        "guides/optimus-serve",
        "guides/task-bq2bq",
        "guides/backup",
        "guides/replay"
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        "concepts/overview",
        "concepts/architecture",
        "concepts/intervals-and-windows",
      ],
    },
    {
      type: "category",
      label: "Development",
      items: ["development/building-plugin"],
    },
    {
      type: "category",
      label: "Contribute",
      items: ["contribute/contributing"],
    },
    'roadmap',
    {
      type: "category",
      label: "Reference",
      items: ["reference/api", "reference/faq", "reference/shell-autocompletion"],
    },
  ],
};
