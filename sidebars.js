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
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  intro: [
    'intro',
    {
      type: 'category',
      label: 'Server setup',
      items: [
        'game-server',
        'install-plugin',
        'game-socket',
        'final-intro'
      ],
    },
    {
      type: 'category',
      label: 'Backend setup',
      items: [
        'backend-introduction'
      ],
    },
    {
      type: 'category',
      label: 'Frontend setup',
      items: [
        'frontend-introduction'
      ],
    },
    {
      type: 'category',
      label: 'Auth protocol',
      items: [
        'auth-introduction'
      ],
    },
  ],

  docs:[
    'docs-intro',
    'backend-api',
    {
      type: 'category',
      label: 'Events',
      items: [
        'game-events',
        'internal-events',
      ],
    },
  ]
  
   
};
