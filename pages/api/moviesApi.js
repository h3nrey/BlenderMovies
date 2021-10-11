import { blenderMovies } from "../../lib/blenderdb"


// export default (req, res) => {
//   res.status(200).json({  
//     name: [
//       {
//             tittle: 'sprite Fright',
//             overview: 'When a group of rowdy teenagers trek into an isolated forest, they discover peaceful mushroom creatures that turn out to be an',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/5b/38/5b383236b58eaa3f2a4f1b303f7ed345.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Settlers',
//             overview: 'A gift from the Blender Animation Studio team to the community. Free character rigs and sets.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/c8/75/c875315646991de9476b2efa473273c5.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Coffee Run',
//             overview: 'Fueled by caffeine, a young woman runs through the bittersweet memories of her past relationship.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/48/2f/482f54938667ea9d6e438d6f3c7522df.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Spring',
//             overview: 'A poetic fantasy film written and directed by Andy Goralczyk.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/53/b2/53b2bc7d7900f0e1e60bf64ebf38032d.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Hero',
//             overview: 'A Blender 2D open movie project, directed by Daniel Martinez Lara.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/40/f7/40f7bc97c952f8df0f9c88d29defe8d4.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'The Daily Dweebs',
//             overview: 'A fun animation concept featuring an adorable dog going though an emotional rollercoaster.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/8a/f5/8af53cbb77caa17860e05bb12637790e.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Agent 327',
//             overview: 'Operation Barbershop is the first animation test for the Agent 327 project, released in 2017.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/07/7c/077c975fdb404609532364dd5a2e2354.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Caminandes: Llamigos',
//             overview: 'Experience the Patagonian winter, where Koro has to struggle and fight to get one berry. But this time, he is not alone!',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/63/96/6396cb4e44284b80ead9300d9b47c544.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Glass Half',
//             overview: 'Exploring cartoon animation and rendering in Blender 2.6x viewport - this 2015 short film looks fantastic even in 4K.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/a7/29/a729226ee01b944d82aff444e1bfccea.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Cosmos Laundromat: First Cycle ',
//             overview: 'Aimed at becoming a feature film, the first episode of Cosmos Laundromat became the biggest Blender Institute production',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/11/47/114784105a9b180e08e117cbf2612e5b.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Caminandes: Gran Dillama',
//             overview: '"Gran Dillama", the second Caminandes episode with Koro the stubborn llama was made in 2013.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/59/b9/59b9415d4044f48f9b9e318c4c5a7984.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Tears of Steel',
//             overview: 'In 2012 this film pushed the limits for motion tracking, masking and realistic rendering in Blender.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/07/78/0778415062f8dff56a046a7eca44567c.jpg',
//             movieLink: ''
//           }, 
//           {
//             tittle: 'Sintel',
//             overview: 'This fantasy short film from 2010 pushed the Blender 2.5 project forward.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/cc/11/cc1172271dcf723a34f488a3344e82b2.jpg',
//             movieLink: ''
//           },
//           {
//             tittle: 'Big Buck Bunny',
//             overview: 'With millions of views all around the world, this 2008 film has become an open source legend.',
//             bannerImage: '',
//             posterImage: '',
//             movieLink: ''
//           },
//           {
//             tittle: 'Elephant Dreams',
//             overview: 'Released in 2006, this is widely known as the first open movie ever. Elephants Dream has put Blender on the radar for many pros.',
//             bannerImage: '',
//             posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/b9/74/b974edc53c3abb380df2fba4cbdcb716.jpg',
//             movieLink: ''
//           }
  
  
//   ]})
// }

export default (req, res) => {
  res.status(200).json({
    name: blenderMovies
  })
}


// movies: [ 
//   {
//     tittle: 'sprite Fright',
//     overview: 'When a group of rowdy teenagers trek into an isolated forest, they discover peaceful mushroom creatures that turn out to be an',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/5b/38/5b383236b58eaa3f2a4f1b303f7ed345.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Settlers',
//     overview: 'A gift from the Blender Animation Studio team to the community. Free character rigs and sets.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/c8/75/c875315646991de9476b2efa473273c5.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Coffee Run',
//     overview: 'Fueled by caffeine, a young woman runs through the bittersweet memories of her past relationship.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/48/2f/482f54938667ea9d6e438d6f3c7522df.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Spring',
//     overview: 'A poetic fantasy film written and directed by Andy Goralczyk.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/53/b2/53b2bc7d7900f0e1e60bf64ebf38032d.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Hero',
//     overview: 'A Blender 2D open movie project, directed by Daniel Martinez Lara.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/40/f7/40f7bc97c952f8df0f9c88d29defe8d4.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'The Daily Dweebs',
//     overview: 'A fun animation concept featuring an adorable dog going though an emotional rollercoaster.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/8a/f5/8af53cbb77caa17860e05bb12637790e.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Agent 327',
//     overview: 'Operation Barbershop is the first animation test for the Agent 327 project, released in 2017.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/07/7c/077c975fdb404609532364dd5a2e2354.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Caminandes: Llamigos',
//     overview: 'Experience the Patagonian winter, where Koro has to struggle and fight to get one berry. But this time, he is not alone!',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/63/96/6396cb4e44284b80ead9300d9b47c544.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Glass Half',
//     overview: 'Exploring cartoon animation and rendering in Blender 2.6x viewport - this 2015 short film looks fantastic even in 4K.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/a7/29/a729226ee01b944d82aff444e1bfccea.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Cosmos Laundromat: First Cycle ',
//     overview: 'Aimed at becoming a feature film, the first episode of Cosmos Laundromat became the biggest Blender Institute production',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/11/47/114784105a9b180e08e117cbf2612e5b.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Caminandes: Gran Dillama',
//     overview: '"Gran Dillama", the second Caminandes episode with Koro the stubborn llama was made in 2013.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/59/b9/59b9415d4044f48f9b9e318c4c5a7984.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Tears of Steel',
//     overview: 'In 2012 this film pushed the limits for motion tracking, masking and realistic rendering in Blender.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/07/78/0778415062f8dff56a046a7eca44567c.jpg',
//     movieLink: ''
//   }, 
//   {
//     tittle: 'Sintel',
//     overview: 'This fantasy short film from 2010 pushed the Blender 2.5 project forward.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/cc/11/cc1172271dcf723a34f488a3344e82b2.jpg',
//     movieLink: ''
//   },
//   {
//     tittle: 'Big Buck Bunny',
//     overview: 'With millions of views all around the world, this 2008 film has become an open source legend.',
//     bannerImage: '',
//     posterImage: '',
//     movieLink: ''
//   },
//   {
//     tittle: 'Elephant Dreams',
//     overview: 'Released in 2006, this is widely known as the first open movie ever. Elephants Dream has put Blender on the radar for many pros.',
//     bannerImage: '',
//     posterImage: 'https://ddz4ak4pa3d19.cloudfront.net/cache/b9/74/b974edc53c3abb380df2fba4cbdcb716.jpg',
//     movieLink: ''
//   }
// ]